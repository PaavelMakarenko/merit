/* ====== AG helper for invoices (rewritten) ====== */
(function(){
  console.log("🚀 custom script activated");

  /************** 1) UI подправки **************/
  jQuery(".content.maincontent.subwrap").css({'padding-left':'120px'});
  jQuery("#breadcrumbs").css({'padding':'0px 60px 0 140px'});

  /************** 2) Кнопки (уникальные id) **************/
  const buttons = [
    { id:'kolblik',      text:'Kõlblik',   css:{top:60,  bg:'#22a506', fg:'#fff'} },
    { id:'kokku',        text:'Kokku',     css:{top:100, bg:'#4eff28', fg:'#000'} },
    //{ id:'selver',     text:'Selver',    css:{top:150, bg:'red',     fg:'#fff'} },
    //{ id:'maxima',     text:'Maxima',    css:{top:190, bg:'red',     fg:'#fff'} },
    { id:'omavedu',      text:'Omavedu',   css:{top:150, bg:'#0077ff', fg:'#fff'} },
    { id:'updatePrices', text:'Uus hind',  css:{top:190, bg:'#ad1e42', fg:'#fff'} },

    // Пресеты позиций (были дубли id — исправлено)
    { id:'setARM',      text:'ARM',      code:'111m',  css:{top:260, bg:'#00a611', fg:'#fff'} },
    { id:'setSEA',      text:'SEA',      code:'112m',  css:{top:300, bg:'#a65017', fg:'#fff'} },
    { id:'setKANA',     text:'KANA',     code:'114m',  css:{top:340, bg:'#ffdb00', fg:'#000'} },
    { id:'setSISE',     text:'SISE',     code:'113m',  css:{top:380, bg:'#d40b0b', fg:'#fff'} },
    { id:'setKALK',     text:'KALK',     code:'116m',  css:{top:420, bg:'#77f82f', fg:'#000'} },
    { id:'setTIIVAD',   text:'TIIVAD',   code:'115m',  css:{top:460, bg:'#fff86d', fg:'#000'} },
    { id:'setSEAPUN',   text:'SEA PUN',  code:'101m',  css:{top:500, bg:'#1f2ed6', fg:'#fff'} },

    { id:'setTALLE',    text:'TALLE',    code:'120m',  css:{top:570, bg:'#a65017', fg:'#fff'} },
    { id:'setKARREE',   text:'KARREE',   code:'119m',  css:{top:610, bg:'#1f2ed6', fg:'#fff'} },
    { id:'setRINNA',    text:'RINNA',    code:'177m',  css:{top:650, bg:'#e803b7', fg:'#fff'} },

    { id:'setANT',      text:'ANT',      code:'150m',  css:{top:700, bg:'#2fe6f8', fg:'#000'} },
    { id:'setRIBI',     text:'RIBI',     code:'161m',  css:{top:740, bg:'#723105', fg:'#fff'} },

    { id:'setKK',       text:'KK',       code:'117m',  css:{top:790, left:0,   bg:'#ecff2e', fg:'#000'} },
    { id:'setAK',       text:'AK',       code:'118m',  css:{top:790, left:60,  bg:'#f50505', fg:'#fff'} },
    { id:'setLK',       text:'LK',       code:'143m',  css:{top:790, left:120, bg:'#54ab0c', fg:'#fff'} },

    { id:'setMAKS',     text:'MAKS',     code:'140m',  css:{top:830, bg:'#8f0909', fg:'#fff'} },
    { id:'setSUTTIIB',  text:'SÜT TIIB', code:'124m',  css:{top:830, left:90, bg:'#b92f2f', fg:'#fff'} },

    { id:'setBEEF',     text:'BEEF',     code:'1110m', css:{top:880, left:0,  bg:'#f82f2f', fg:'#fff'} },
    { id:'setBEEFKG',   text:'BEEF kg',  code:'1111m', css:{top:880, left:90, bg:'#f82f2f', fg:'#fff'} },
    { id:'setPORK',     text:'PORK',     code:'1114m', css:{top:920, left:0,  bg:'#f82f2f', fg:'#fff'} },
    { id:'setPORKKG',   text:'PORK kg',  code:'1114k', css:{top:920, left:90, bg:'#f82f2f', fg:'#fff'} },
    { id:'setLAMB',     text:'LAMB',     code:'1115m', css:{top:960, left:0,  bg:'#f82f2f', fg:'#fff'} },
    { id:'setLAMBKG',   text:'LAMB kg',  code:'1112m', css:{top:960, left:90, bg:'#f82f2f', fg:'#fff'} },
    { id:'setSUDZ',     text:'SUDZ',     code:'1116m', css:{top:1000,left:0,  bg:'#f82f2f', fg:'#fff'} },
    { id:'setSUDZKG',   text:'SUDZ kg',  code:'1113m', css:{top:1000,left:90, bg:'#f82f2f', fg:'#fff'} },
  ];

  buttons.forEach(b=>{
    const top = (b.css && b.css.top != null) ? b.css.top : 0;
    const left = (b.css && b.css.left != null) ? b.css.left : 0;
    jQuery("body").prepend(
      `<button id="${b.id}" class="${b.code ? 'setPosition' : ''}" ${b.code ? `data-post="${b.code}"` : ''} 
        style="background:${b.css.bg};color:${b.css.fg};position:fixed;top:${top}px;left:${left}px;z-index:9999;">
        ${b.text}</button>`
    );
  });

  /************** 3) Данные цен из Google Sheet **************/
  const SHEET_URL = "https://opensheet.elk.sh/1XVWIIWKbOMtOhEnEYoAYIrdSQ7uHMhTYQe5sd4JLKGs/Sheet1";
  const PriceData = {
    stores: new Map(),     // Map<store, Map<code, number>>
    basturmaDate: null,
    ready: null
  };

  PriceData.ready = (async () => {
    const resp = await fetch(SHEET_URL, { cache: "no-store" });
    const rows = await resp.json();

    for (const row of rows) {
      const store = (row.Store || "").trim();
      const code  = (row.Code || "").trim();
      const priceStr = ((row.Price ?? "") + "").replace(",", ".").trim();
      const price = Number(priceStr);

      if (store === "meta" && code === "basturmaDate") {
        PriceData.basturmaDate = row.Price;
        continue;
      }
      if (!store || !code || !Number.isFinite(price)) continue;

      if (!PriceData.stores.has(store)) PriceData.stores.set(store, new Map());
      PriceData.stores.get(store).set(code, price);

      // Совместимость со старым кодом (глобальные Map)
      if (!globalThis[store]) globalThis[store] = new Map();
      globalThis[store].set(code, price);
    }
    globalThis.basturmaDate = PriceData.basturmaDate;
    console.log("📅 basturmaDate:", PriceData.basturmaDate);
    console.log("✅ Магазины:", [...PriceData.stores.keys()]);
  })().catch(e=>{
    console.error("❌ Ошибка загрузки прайса:", e);
  });

  function getPriceFor(department, articleCode) {
    const map = globalThis[department];
    if (map instanceof Map) {
      const v = map.get(articleCode);
      return Number.isFinite(v) ? v : null;
    }
    return null;
  }

  /************** 4) Утилиты работы со строками **************/
  function lastRow() {
    return jQuery(".saleslines .items > .item:last");
  }
  function articleInput($row) {
    return $row.find("input[name='ArticleCode'].getitembyid");
  }

  function addPositionByCode(code) {
    const row = lastRow();
    const input = articleInput(row);
    if (!input.length) {
      console.warn("Не найдено поле ArticleCode в последней строке");
      return;
    }

    input.focus();
    input.val(code);
    input.trigger("input").trigger("change").trigger("keyup");

    setTimeout(function(){
      const gridId = input.attr("data-gridid");
      const $lists = jQuery([
        "#dropdownlist",
        gridId ? `#${gridId}` : null
      ].filter(Boolean).join(","));

      let clicked = false;
      $lists.each(function(){
        const $opt = jQuery(this).find(".field-Code span")
          .filter(function(){ return jQuery(this).text().trim() === code; })
          .first();
        if ($opt.length) {
          $opt.click();
          clicked = true;
          return false;
        }
      });

      if (!clicked && input[0]) {
        const el = input[0];
        el.dispatchEvent(new KeyboardEvent("keydown", { key:"Enter", bubbles:true }));
        el.dispatchEvent(new KeyboardEvent("keyup",   { key:"Enter", bubbles:true }));
      }

      setTimeout(function(){
        jQuery(".saleslines .tablewrap .addnewline > td").click();
      }, 80);
    }, 100);
  }

  /************** 5) Логика кнопок **************/
  const basturmaCodes   = ["1110m","1114m","1115m","1116m"];
  const basturmaKgCodes = ["1111m","1114k"];

  jQuery("#kolblik").on("click", async function(){
    await PriceData.ready;

    // исходная дата документа
    var stringDate = jQuery("#DocumentDate").val(); // DD.MM.YYYY
    var [day, month, year] = (stringDate || "").split(".");
    var currentDate = day && month && year ? new Date(+year, +month-1, +day) : new Date();

    var futureDate15  = new Date(currentDate.getTime());
    futureDate15.setDate(futureDate15.getDate() + 15);

    var futureDate181 = new Date(currentDate.getTime());
    futureDate181.setDate(futureDate181.getDate() + 180);

    function fmt(d){ return ("0"+d.getDate()).slice(-2) + "." + ("0"+(d.getMonth()+1)).slice(-2) + "." + d.getFullYear(); }

    var expiryString15  = " (kõlblik kuni " + fmt(futureDate15)  + ")";
    var expiryString181 = " (kõlblik kuni " + fmt(futureDate181) + ")";

    // если basturmaDate нет — используем 181 дней
    var basturmaExp = " (kõlblik kuni " + (globalThis.basturmaDate || fmt(futureDate181)) + ")";

    jQuery(".items > .item").each(function(){
      var item = jQuery(this);
      var code = item.find(".field-ArticleCode input[name=ArticleCode]").val();
      var $desc = item.find(".field-Description input");
      if (!$desc.length) return;

      if (basturmaCodes.includes(code)) {
        $desc.val($desc.val() + basturmaExp);
      } else if (basturmaKgCodes.includes(code)) {
        $desc.val($desc.val() + expiryString181);
      } else {
        $desc.val($desc.val() + expiryString15);
      }
      $desc.trigger("change");
    });
  });

  jQuery("#selver").on("click", function(){
    jQuery("#HComment").val("Maksja: Selver AS\nAadress: Pärnu mnt 238, Tallinn\nRg-kood: 10379733");
  });

  jQuery("#maxima").on("click", function(){
    jQuery("#HComment").val("Maksja: Maxima Eesti OÜ\nAadress: Aiandi str.13/2, Tallinn\nRg-kood: 10765896");
  });

  jQuery("#kokku").on("click", function(){
    var kogus = 0;
    jQuery("tbody .field-Quantity.numberfield").each(function(){
      var el = jQuery(this);
      var unit = el.next().find("input:text").val();
      var val = parseFloat((el.children().val() || "0").toString().replace(",", "."));
      if (isNaN(val)) val = 0;
      if (unit === "tk") kogus += val * 0.05; else kogus += val;
    });
    kogus = Math.round(kogus * 100) / 100;

    var curText = jQuery("#FComment").val() || "";
    var currentDate = new Date(Date.now() + 24*60*60*1000);
    var dd = ("0"+currentDate.getDate()).slice(-2);
    var mm = ("0"+(currentDate.getMonth()+1)).slice(-2);
    var yyyy = currentDate.getFullYear();
    var tomorrowDate = dd+"."+mm+"."+yyyy;

    jQuery("#FComment").val("Kogus kokku: " + kogus + " kg\nKaste: \n" + curText + "\nTarne kuupäev " + tomorrowDate + "\nTooted säilitada temp.  +2,...+4 C");
  });

  jQuery("#omavedu").on("click", function(){
    var curText = jQuery("#FComment").val() || "";
    jQuery("#FComment").val(curText + (curText ? "\n" : "") + "Omavedu");
  });

  jQuery(".setPosition").off("click").on("click", function(){
    const code = jQuery(this).data("post");
    addPositionByCode(code);
  });

  jQuery("#updatePrices").on("click", async function(){
    await PriceData.ready;

    const department = jQuery("#DepartmentName").val();
    if (!department) {
      console.warn("⚠️ DepartmentName пуст");
    } else if (!(globalThis[department] instanceof Map)) {
      console.warn(`⚠️ Цены для отдела "${department}" не загружены`);
    }

    jQuery(".saleslines .items > .item").each(function(){
      const $item = jQuery(this);
      const articleCode = $item.find(".field-ArticleCode input[name=ArticleCode]").val();
      const $price = $item.find(".field-Price input");
      const newPrice = getPriceFor(department, articleCode);

      if (newPrice != null) {
        $price.val(newPrice);
        $price.trigger("input").trigger("change");
      } else if (articleCode) {
        console.warn(`💡 Нет цены для ${department}:${articleCode}`);
      }
    });
  });

})();


});


}, 2000);

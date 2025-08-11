console.log("custom script activated210125");

setTimeout(function(){ 

jQuery(".content.maincontent.subwrap").css({
	'padding-left': '120px',
});

jQuery("#breadcrumbs").css({
	'padding': '0px 60px 0 140px',
});

jQuery("body").prepend("<button id='kolblik' style='background: #22a506;color: white; position:fixed; top: 60px; left: 0; z-index: 9999;'>K\xF5lblik</button>");
jQuery("body").prepend("<button id='kokku' style='background: #4eff28;color: black; position:fixed; top: 100px; left: 0; z-index: 9999;'>Kokku</button>");

//jQuery("body").prepend("<button id='selver' style='background: red;color: white; position:fixed; top: 150px; left: 0; z-index: 9999;'>Selver</button>");
//jQuery("body").prepend("<button id='maxima' style='background: red;color: white; position:fixed; top: 190px; left: 0; z-index: 9999;'>Maxima</button>");

jQuery("body").prepend("<button id='omavedu' style='background: #0077ff;color: white; position:fixed; top: 150px; left: 0; z-index: 9999;'>Omavedu</button>");
jQuery("body").prepend("<button id='updatePrices' style='background: #ad1e42;color: white; position:fixed; top: 190px; left: 0; z-index: 9999;'>Uus hind</button>");

jQuery("body").prepend("<button id='setARM' class='setPosition' data-post='111m' style='background: #00a611;color: white; position:fixed; top: 260px; left: 0; z-index: 9999;'>ARM</button>");
jQuery("body").prepend("<button id='setSEA' class='setPosition' data-post='112m' style='background: #a65017;color: white; position:fixed; top: 300px; left: 0; z-index: 9999;'>SEA</button>");
jQuery("body").prepend("<button id='setKANA' class='setPosition' data-post='114m' style='background: #ffdb00;color: black; position:fixed; top: 340px; left: 0; z-index: 9999;'>KANA</button>");
jQuery("body").prepend("<button id='setSISE' class='setPosition' data-post='113m' style='background: #d40b0b;color: white; position:fixed; top: 380px; left: 0; z-index: 9999;'>SISE</button>");
jQuery("body").prepend("<button id='setKALK' class='setPosition' data-post='116m' style='background: #77f82f;color: black; position:fixed; top: 420px; left: 0; z-index: 9999;'>KALK</button>");
jQuery("body").prepend("<button id='setTIIVAD' class='setPosition' data-post='115m' style='background: #fff86d;color: black; position:fixed; top: 460px; left: 0; z-index: 9999;'>TIIVAD</button>");
jQuery("body").prepend("<button id='setSEAPUN' class='setPosition' data-post='101m' style='background: #1f2ed6;color: white; position:fixed; top: 500px; left: 0; z-index: 9999;'>SEA PUN</button>");


jQuery("body").prepend("<button id='setKANA' class='setPosition' data-post='120m' style='background: #a65017;color: white; position:fixed; top: 570px; left: 0; z-index: 9999;'>TALLE</button>");
jQuery("body").prepend("<button id='setARM' class='setPosition' data-post='119m' style='background: #1f2ed6;color: white; position:fixed; top: 610px; left: 0; z-index: 9999;'>KARREE</button>");
jQuery("body").prepend("<button id='setSEA' class='setPosition' data-post='177m' style='background: #e803b7;color: white; position:fixed; top: 650px; left: 0; z-index: 9999;'>RINNA</button>");

jQuery("body").prepend("<button id='setANT' class='setPosition' data-post='150m' style='background: #2fe6f8;color: black; position:fixed; top: 700px; left: 0; z-index: 9999;'>ANT</button>");
//jQuery("body").prepend("<button id='setTRDARM' class='setPosition' data-post='160m' style='background: #f82f2f;color: white; position:fixed; top: 700px; left: 90px; z-index: 9999;'>TRD ARM</button>");

jQuery("body").prepend("<button id='setRIBI' class='setPosition' data-post='161m' style='background: #723105;color: white; position:fixed; top: 740px; left: 0; z-index: 9999;'>RIBI</button>");
//jQuery("body").prepend("<button id='setLECHOS' class='setPosition' data-post='162m' style='background: #29eb00;color: black; position:fixed; top: 740px; left: 90px; z-index: 9999;'>LECHOS</button>");

jQuery("body").prepend("<button id='setKK' class='setPosition' data-post='117m' style='background: #ecff2e;color: black; position:fixed; top: 790px; left: 0; z-index: 9999;'>KK</button>");
jQuery("body").prepend("<button id='setAK' class='setPosition' data-post='118m' style='background: #f50505;color: white; position:fixed; top: 790px; left: 60px; z-index: 9999;'>AK</button>");
jQuery("body").prepend("<button id='setLK' class='setPosition' data-post='143m' style='background: #54ab0c;color: white; position:fixed; top: 790px; left: 120px; z-index: 9999;'>LK</button>");
jQuery("body").prepend("<button id='setMAKS' class='setPosition' data-post='140m' style='background: #8f0909;color: white; position:fixed; top: 830px; left: 0; z-index: 9999;'>MAKS</button>");
jQuery("body").prepend("<button id='setSUTTIIB' class='setPosition' data-post='124m' style='background: #b92f2f;color: white; position:fixed; top: 830px; left: 90px; z-index: 9999;'>S\xDCT TIIB</button>");

jQuery("body").prepend("<button id='setBEEF' class='setPosition' data-post='1110m' style='background: #f82f2f;color: white; position:fixed; top: 880px; left: 0; z-index: 9999;'>BEEF</button>");
jQuery("body").prepend("<button id='setBEEFKG' class='setPosition' data-post='1111m' style='background: #f82f2f;color: white; position:fixed; top: 880px; left: 90px; z-index: 9999;'>BEEF kg</button>");
jQuery("body").prepend("<button id='setPORK' class='setPosition' data-post='1114m' style='background: #f82f2f;color: white; position:fixed; top: 920px; left: 0; z-index: 9999;'>PORK</button>");
jQuery("body").prepend("<button id='setPORKKG' class='setPosition' data-post='1114k' style='background: #f82f2f;color: white; position:fixed; top: 920px; left: 90px; z-index: 9999;'>PORK kg</button>");
jQuery("body").prepend("<button id='setLAMB' class='setPosition' data-post='1115m' style='background: #f82f2f;color: white; position:fixed; top: 960px; left: 0; z-index: 9999;'>LAMB</button>");
jQuery("body").prepend("<button id='setLAMBKG' class='setPosition' data-post='1112m' style='background: #f82f2f;color: white; position:fixed; top: 960px; left: 90px; z-index: 9999;'>LAMB kg</button>");
jQuery("body").prepend("<button id='setSUDZ' class='setPosition' data-post='1116m' style='background: #f82f2f;color: white; position:fixed; top: 1000px; left: 0; z-index: 9999;'>SUDZ</button>");
jQuery("body").prepend("<button id='setSUDZKG' class='setPosition' data-post='1113m' style='background: #f82f2f;color: white; position:fixed; top: 1000px; left: 90px; z-index: 9999;'>SUDZ kg</button>");



const basturmaCodes = ["1110m", "1114m", "1115m", "1116m"];
const basturmaKgCodes = ["1111m", "1114k"];

jQuery("#kolblik").on('click', function() {
	
	var stringDate = jQuery("#DocumentDate").val();
	var day = stringDate.split(".")[0], month = stringDate.split(".")[1], year = stringDate.split(".")[2];
	var currentDate = new Date(year,month-1,day);
	
	var futureDate15 = new Date(currentDate.setDate(currentDate.getDate() + 15));
	var expiryString15 = " (k\xF5lblik kuni " + ("0" + futureDate15.getDate()).slice(-2) + "." +("0" + (futureDate15.getMonth() + 1)).slice(-2) + "." + futureDate15.getFullYear() + ")";
	
	var futureDate181 = new Date(currentDate.setDate(currentDate.getDate() + 165));
	var expiryString181 = " (k\xF5lblik kuni " + ("0" + futureDate181.getDate()).slice(-2) + "." +("0" + (futureDate181.getMonth() + 1)).slice(-2) + "." + futureDate181.getFullYear() + ")";
	
	var basturmaExpiryString = " (k\xF5lblik kuni " + basturmaDate + ")";
	
	jQuery(".items > .item").each(function() {
		var item = jQuery(this);
		var articleCode = item.find(".field-ArticleCode input[name=ArticleCode]").val();
		console.log(articleCode);
		var itemDescription = item.find(".field-Description input");
		if(basturmaCodes.includes(articleCode)) {
			itemDescription.val(itemDescription.val() + basturmaExpiryString);	
		}
		else if(basturmaKgCodes.includes(articleCode)) {
			itemDescription.val(itemDescription.val() + expiryString181);	
		}
		else {
			itemDescription.val(itemDescription.val() + expiryString15);
		}
		itemDescription.trigger("change");
	})

});

jQuery("#selver").on('click', function() {
	jQuery("#HComment").val("Maksja: Selver AS\nAadress: P\xE4rnu mnt 238, Tallinn\nRg-kood: 10379733");
});

jQuery("#maxima").on('click', function() {
	jQuery("#HComment").val("Maksja: Maxima Eesti O\xDC\nAadress: Aiandi str.13/2, Tallinn\nRg-kood: 10765896");
});			

jQuery("#kokku").on('click', function() {
	var kogus = 0;
	jQuery("tbody .field-Quantity.numberfield").each(function(){
		var el = jQuery(this);
		if(el.next().find("input:text").val() == 'tk') {
			kogus += parseFloat(el.children().val().replace(',', '.')) * 0.05;
		}
		else {
			kogus += parseFloat(el.children().val().replace(',', '.'));	
		}					
	});
	kogus = Math.round(kogus * 100) / 100;
	var curText = jQuery("#FComment").val();
	
	var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	var day = currentDate.getDate();
		if( day < 10 )
			day = "0" + day;
	var month = currentDate.getMonth()+ 1;
		if( month < 10 )
			month = "0" + month;
	var year = currentDate.getFullYear();
	var tomorrowDate = day + "." + month + "." + year;
	
	jQuery("#FComment").val("Kogus kokku: " + kogus + " kg\nKaste: \n" + curText + "\nTarne kuup\xE4ev " + tomorrowDate + "\nTooted s\xE4ilitada temp.  +2,...+4 C");
});

jQuery("#omavedu").on('click', function() {
	var curText = jQuery("#FComment").val();	
	jQuery("#FComment").val(curText + "\nOmavedu");
});

jQuery(".setPosition").on('click', function() {
	var input = jQuery(".saleslines .tablewrap tbody tr.item:last-child input[name=ArticleCode]");
	var post_id = jQuery(this).data("post");
	input.focus().focus().val(post_id).trigger("change").trigger("keyup");
	jQuery("#dropdownlist .field-Code span:contains('" + post_id +"')").filter(function() {
	    return jQuery(this).text() === post_id;
	}).click();
	jQuery(".saleslines .tablewrap .addnewline > td").click();
});

jQuery("#updatePrices").on('click', function() {
	
	jQuery(".saleslines .items > .item").each(function() {
		var item = jQuery(this);
		var articleCode = item.find(".field-ArticleCode input[name=ArticleCode]").val();
		var price = item.find(".field-Price input");
		var new_price = null;
		
		var department = jQuery("#DepartmentName").val();
		
		switch (department) {
			case 'coop':
				new_price = coop.get(articleCode);
				break;
			case 'grossi':
				new_price = grossi.get(articleCode);
				break;
			case 'SANITEX':
				new_price = sanitex.get(articleCode);
				break;
			case 'tartu':
				new_price = tartu.get(articleCode);
				break;
			case 'harju':
				new_price = harju.get(articleCode);
				break;
			case 'prisma':
				new_price = prisma.get(articleCode);
				break;
			case 'keila':
				new_price = keila.get(articleCode);
				break;
			case 'maxima':
				new_price = maxima.get(articleCode);
				break;
			case 'pinus':
				new_price = pinus.get(articleCode);
				break;
			case 'selver':
				new_price = selver.get(articleCode);
				break;
			case 'a1000':
				new_price = a1000.get(articleCode);
				break;
			case 'herkut':
				new_price = herkut.get(articleCode);
				break;
			case 'tht':
				new_price = tht.get(articleCode);
				break;
			case 'meie':
				new_price = meie.get(articleCode);
				break;
			case 'aldar':
				new_price = aldar.get(articleCode);
				break;
			case 'Rimi':
				new_price = rimi.get(articleCode);
				break;
			default:
				new_price = null;
		}
		
		if(new_price != null) {
			price.val(new_price);
			price.trigger("change");	
		}
	})

});


}, 2000);

});


}, 2000);

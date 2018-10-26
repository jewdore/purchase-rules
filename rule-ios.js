      function getInfo(email_body) {

        var d=email_body.replace(/(\r\n)|(\n)/g,'');

        var object = {};

        var img = /img\s*src=\"(.*?)\".*?alt=\"(.*?)\"/.exec(d)

        if(img && img.length > 2){
          object['icon'] = img[1] 
          object['app_name'] = img[2]

          if (object['app_name'].indexOf(", ")) {
            var app_goods = object['app_name'].split(", ")

            object['app_name'] =  app_goods[0]
            object['goods_name'] = app_goods[1]
          }
        }

        
        var money = /<span\s+style=\"font-weight:600;white-space:nowrap\">(.{1})(.*?)<\/span>/.exec(d)

        if(money && money.length > 2){
          object['money_unit'] = money[1] 
          object['money'] = money[2]
        }
        
        block(JSON.stringify(object))
      }
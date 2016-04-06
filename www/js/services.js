angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 10000,
    name: '阿里，一个人的转山路',
    lastText: '转山的过程中，高原上残酷的环境给了人们自省的机会。每天混迹于熟悉的氛围中，最容易的就是延续，延续自己的人，延续自己的心情，延续自己的角色。只有当周遭的一切变得陌生的时候，你才是新生的，你才是独立的，你，才重新活过来了。',
    face: './img/uploads/1.jpeg'
  }, {
    id: 10001,
    name: '自驾横穿美国20天',
    lastText: '美国是个车轮上的国家，但是这个轮子绝对指的是汽车的,在大西部，火车显得有点孤独和格格不入;在一直狂野的大峡谷，温情有时候是点缀它最好的笔触。在快要进入落日的”表演“时间的时候，大家都会安静下来，聚在一起，找个地儿，坐下，看着大自然，给你变个戏法。',
    face: './img/uploads/2.jpeg'
  }, {
    id: 10002,
    name: '希腊&意大利自由行14天',
    lastText: '世界真的很大，大到我们需要花一生去慢慢的走遍,世界真的很小，小到我们只要有1立方米的勇气就能推开家门,圣托里尼~每一个新娘都想在圣托里尼来一场浪漫的婚礼，拥有美丽的婚纱照,我实现了，不过新婚的我带着我的朋友们而不是老公',
    face: './img/uploads/3.jpeg'
  }, {
    id: 10003,
    name: '长白山-红海滩逐秋',
    lastText: '时隔半年多之久，零零碎碎，照片删了又删，只留了些许。国庆，就是这么任性的直奔东北而去。早已把看人山人海，高速堵车看淡，人家在度假，我像是在渡劫。徐州-东北（长白山），1600公里，就这么直奔东北了。好像拍了好多好多照片，都没来得及整理……先来几张吧！',
    face: './img/uploads/4.jpeg'
  }, {
    id: 10004,
    name: '我愿和你背起行囊，走在西行向北的路上~',
    lastText: '有人说，没去过西北就不知道中国有多大。到大西北去，你就相当于遇见了大半个中国。当我们爬上海拔3000米的高原山脉，遇上世界上最幽蓝的高原湖泊，看到全球规模最大的油菜花海，癫疯在无人区的高速公路，我们追逐阳光，日出而行，日落而归',
    face: './img/uploads/5.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

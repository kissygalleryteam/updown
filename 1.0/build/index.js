/*
combined files : 

gallery/updown/1.0/index

*/
/**
 * @fileoverview
 * @author 齐修<yanbei.chenyb@alibaba-inc.com>
 * @module updown
 **/


KISSY.add('gallery/updown/1.0/index',function(S, Node, Base) {
    /**
     * [一个简单的顶踩组件，异步获取是否成功，目前是模拟的]
     * @param  {[type]} S    [description]
     * @param  {[type]} Base [description]
     * @return {[type]}      [description]
     */

    function Updown(config) {
        var self = this;

        Updown.superclass.constructor.call(self, config);

        self._init();
    }

    S.extend(Updown, Base, {
        _init: function() {
            var self = this,
                el = self.get('el');

            el.delegate('click', '.up', function(e) {
                if (!el.hasClass('marked')) {
                    S.later(self.up, 1000, false, self);
                    self.toggleLoader();
                    el.addClass('marked');
                }
                e.preventDefault();
            });
            el.delegate('click', '.down', function(eo) {
                if (!el.hasClass('marked')) {
                    S.later(self.down, 1000, false, self);
                    self.toggleLoader();
                    el.addClass('marked');
                }
                eo.preventDefault();
            });
        },
        /**
         * [up 赞一个，发送请求到后台，如果请求成功，页面局部刷新赞+1]
         * @return {[type]} [description]
         */
        up: function() {
            var self = this,
                el = self.get('el'),

                up = el.one('.up'),
                text = up.one('.num').text(),
                num = text.match(/\d+/g)[0];

            // todo
            // S.io.post('url', function(res){
            num++;
            up.one('.num').text('(' + num + ')');
            self.toggleLoader();
            // });
        },
        /**
         * [down 踩一个，发送请求到后台，如果请求成功，页面局部刷新踩+1]
         * @return {[type]} [description]
         */
        down: function() {
            var self = this,
                el = self.get('el'),
                down = el.one('.down'),
                text = down.one('.num').text(),
                num = text.match(/\d/g)[0];

            // todo
            // S.io.post('url', function(res){
            num++;
            down.one('.num').text('(' + num + ')');
            self.toggleLoader();
            // });
        },
        /**
         * [toggleLoader 控制loading的状态切换，由于是异步加载，所以这儿需要loading状态]
         * @return {[type]} [description]
         */
        toggleLoader: function() {
            var self = this,
                el = self.get('el');

            el.one('.up').toggleClass('hidden');
            el.one('.down').toggleClass('hidden');
            el.one('.load').toggleClass('hidden');
        }
    }, {
        ATTRS: {
            name: {
                value: 'Updown'
            },
            el: {
                value: null
            }
        }
    });
    return Updown;
}, {
    requires: ['node', 'base']
});


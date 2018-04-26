
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
         it('URL are defined',function(){
           allFeeds.forEach(function(feed){
             expect(feed.url).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           })
         })
         it('name are defined',function(){
           allFeeds.forEach(function(feed){
             expect(feed.name).toBeDefined();
             expect(feed.url.length).not.toBe(0);
           })
         })
    });

    describe('menu',function(){
       // expect body element has class "menu-hidden"
      it('hidden by default',function(){
          expect($( "body" ).hasClass( "menu-hidden")).toBe(true);
      })
       //after first click expect body element doesn't have "menu-hidden" class
       //after second click expect body has "menu-hidden" class
       it('should change menu visibility',function(){
         $('.menu-icon-link').trigger('click');
         expect($( "body" ).hasClass( "menu-hidden")).toBe(false);
         $('.menu-icon-link').trigger('click');
         expect($( "body" ).hasClass( "menu-hidden")).toBe(true)

       })
    })




    describe('Initial Entries',function(){
      // run return loadFeed(0) after its done.
      beforeEach(function(done){
        loadFeed(0,function(){
          done()
        })
      })
      //expect html document has 'entry' class
      it('at least 1 string',function(){
        {expect($('.entry').length).not.toBe(0)}

      })
    })

    describe('New Feed Selection',function(){
      // define variables then run loadFeed(1) and run loadFeed(2)
       var oldfeed,newfeed
      beforeEach(function(done){
        loadFeed(1,function(){
          oldfeed=$('.feed').html();
          loadFeed(2,function(){
            newfeed=$('.feed').html();
            done()
          })
        })
      });
      //expect return of loadFeed(1) and loadFeed(2) are different.
      it('shoud change content',function(){
        expect(oldfeed!=newfeed).toBe(true)
      })
    })
}());

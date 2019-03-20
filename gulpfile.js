var gulp = require('gulp');
spritesmith=require('gulp.spritesmith');

gulp.task('default', function () {
return gulp.src('src/images/*.png')
.pipe(spritesmith({
imgName: 'sprite.png',
cssName: 'dist/css/sprite.css',
padding:2,
algorithm: 'top-down',
cssTemplate:function(data){
    var arr=[];
    data.sprites.forEach(function (sprite) {
    arr.push(".icon-"+sprite.name+"{" +"background-image: url('"+sprite.escaped_image+"');"+"background-position: "+sprite.px.offset_x+"px "+sprite.px.offset_y+"px;"+"width:"+sprite.px.width+";"+"height:"+sprite.px.height+";"+"}\n");
    　 });
    return arr.join("");
}
}))
.pipe(gulp.dest('dist/images'));
});

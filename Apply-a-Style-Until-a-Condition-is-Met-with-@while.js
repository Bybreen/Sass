// First, define a variable $x and set it to 1. 
// Next, use the @while directive to create the grid system while $x is less than 13. 
// After setting the CSS rule for width, $x is incremented by 1 to avoid an infinite loop.
// Use @while to create a series of classes with different font-sizes.
// There should be 5 different classes from text-1 to text-5. 
// Then set font-size to 15px multiplied by the current index number. 
// Make sure to avoid an infinite loop!

<style type='text/sass'>
$z: 1;
@while $z < 6 {
.text-#{$z} { font-size: 15px * $z;}
$z: $z +1;
}


</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

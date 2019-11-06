// Write a @for directive that takes a variable $j that goes from 1 to 6.

// It should create 5 classes called .text-1 to .text-5 where each has a font-size set to 10px multiplied by the index.


<style type='text/sass'>

@for $j from 1 to 6 {
.text-#{$j} { font-size: 10*$j}
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>

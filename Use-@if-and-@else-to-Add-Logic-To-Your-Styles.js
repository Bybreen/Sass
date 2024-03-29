// Create a mixin called border-stroke that takes a parameter $val. 
// The mixin should check for the following conditions using @if, @else if, and @else:

light - 1px solid black
medium - 3px solid black
heavy - 6px solid black
If $val is not light, medium, or heavy, the border should be set to none.

<style type='text/sass'>

@mixin border-stroke($val) {

@if $val == light {
border: 1px solid black;
}
@else if $val == medium {
border: 3px solid black;
}
@else if $val == heavy {
border: 6px solid black;
}
@else {
border: none;

}
}

  #box {
    width: 150px;
    height: 150px;
    background-color: red;
    @include border-stroke(medium);
  }
</style>

<div id="box"></div>

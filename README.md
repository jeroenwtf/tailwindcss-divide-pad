# tailwindcss-divide-pad

**tl;dr**: A TailwindCSS plugin to add some sweet padding when using `divide-x` or `divide-y` elements.


## What?

Imagine you have a parent element with three children. And you want to divide them with a nice separator, so you go:

```html
<div class="flex divide-x">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

But you want to add some gap. You try with `gap-2` and you get disappointed because it doesn't work the way you expected.

To make it work, you should do something like this:

```diff
<div class="flex divide-x">
-  <div>Item 1</div>
-  <div>Item 2</div>
-  <div>Item 3</div>
+  <div class="pr-2">Item 1</div>
+  <div class="px-2">Item 2</div>
+  <div class="pl-2">Item 3</div>
</div>
```

But this is a PITA and you don't want to do that. Instead, just add `divide-pad-2` (works with any space value) in the parent.

```diff
-<div class="flex divide-x">
+<div class="flex divide-x divide-pad-2">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

Also works with vertical elements (`divide-y`).

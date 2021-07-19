---
sidebar_position: 3
---

# Overriding Bootstrap SASS Variables

Because Method's primary stylesheet imports Bootstrap's source SASS files at the top of the file, you gain the added advantage of having access to all of Bootstrap's SASS variables and mixins. While this is great, having access to the variables will most likely have limited utility without being able to customize them to fit your project's needs. Luckily, this can be accomplished without having to touch any of the actual source files.

To start, let's take a look at the first few lines of the theme.scss file...

```scss title="theme.scss"
/*
THEME STYLES
*/

// Import Bootstrap. Place any overrides before the import.

@import "inc/bootstrap/scss/bootstrap.scss";
```

To change the value of a variable, simply add it before the `@import`:

```scss title="theme.scss" {7-8}
/*
THEME STYLES
*/

// Import Bootstrap. Place any overrides before the import.

$green: #4BFD9F;
$primary: $green;

@import "inc/bootstrap/scss/bootstrap.scss";
```

In this case, we're overriding the value of `$green`, then overiding the value of `$primary` to use the value of `$green` instead of the default, which is `$blue`. While this may seem like a minor change, Bootstrap will be recompiled with the new color choices, which will be reflected in any Bootstrap component with "primary" in it's class name, plus anything else that uses the color stored in `$green`.

For a full list of variables available for override, check out Bootstrap's variables file, which can be found at `inc/bootstrap/scss/_variables.scss`. Just keep in mind that, since overrides are place before the import, you'll need to also override any variables you reference when setting new values. Otherwise, SASS will throw a undefined variable warning.
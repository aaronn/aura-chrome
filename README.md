# Aura: Synesthesia Trainer

This extension is based on a single exercise from this paper which claims to have given adults synesthetic experiences. https://www.nature.com/articles/srep07089

Specifically this is the "homework" component where people were asked to do light reading with the colors set for each letter. There are a few other tasks within the methods section that could be worth building / fun to build.

## How this works right now.

This is very barebones today. You can load a website in chrome, and when you click the extension it'll annotate every character it can parse with a color. Clicking the extension button again will undo all of this.

## The colors

The colors right now are loosely based on a Fisher Price alphabet set. Many people who have grapheme-color synesthesia also had this set as children, leading some to believe this is the cause of it.

## Feature Ideas

Some useful things to build out would be:

- A popout configuration panel for people to configure when it should load, and what colors it should use.
- A way to configure the colors instead of hardcoding them.
- Better parsing of characters– right now we're just iterating through every character in <p> tags.

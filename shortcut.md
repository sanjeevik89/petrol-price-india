Here's how you can convert the Scriptable script to an Apple Shortcut:

1. Create a new shortcut in the Shortcuts app.

2. Add a "Get Contents of Web Page" action and set the URL to the following:
```
https://www.goodreturns.in/petrol-price-in-{{Place}}.html
```
Replace `{{Place}}` with a parameter that will prompt the user to enter a location.

3. Add a "Text" action and set the input to the output of the previous "Get Contents of Web Page" action.

4. Add a "Regular Expression" action with the following settings:
   - Regular Expression: `\<title\>(.*?)\<\/title\>`
   - Output: Matches
   - Capture Groups: 1

5. Add a "Replace Text" action with the following settings:
   - Text: Output of previous "Regular Expression" action
   - Find: `Petrol Price in {{Place}}, Petrol Rate Today`
   - Replace With: (leave empty)
   - Output: Replaced Text

6. Add another "Replace Text" action with the following settings:
   - Text: Output of previous "Replace Text" action
   - Find: ` - Goodreturns`
   - Replace With: (leave empty)
   - Output: Replaced Text

7. Add a "Regular Expression" action with the following settings:
   - Regular Expression: `Rs.(.*?)\/Ltr`
   - Output: Matches
   - Capture Groups: 1

8. Add a "Text" action and set the input to the output of the previous "Regular Expression" action. This will be the petrol price.

9. Add a "Regular Expression" action with the following settings:
   - Regular Expression: `\<span class="(.*?)"\>(.*?)\<i class="`
   - Output: Matches
   - Capture Groups: 2

10. Add a "Regular Expression" action with the following settings:
    - Regular Expression: `(\d+\.\d+)`
    - Output: Matches
    - Capture Groups: 1

11. Add a "Number" action and set the input to the output of the previous "Regular Expression" action. This will be the price change.

12. Add an "If" action with the following conditions:
    - If the output of the "Regular Expression" action in step 9 contains "fuel-rate-down", set the color to green.
    - Else if it contains "fuel-rate-nochange", set the color to purple.
    - Else if it contains "fuel-rate-up", set the color to red.

13. Add another "If" action with the following conditions:
    - If the output of the "Regular Expression" action in step 9 contains "fuel-rate-down", set the prefix to "-".
    - Else if it contains "fuel-rate-nochange", set the prefix to "±".
    - Else if it contains "fuel-rate-up", set the prefix to "+".

14. Add a "Text" action and set the input to the output of the "Regular Expression" action in step 7. This will be the capitalized location name.

15. Add a "Date" action and set the input to the output of the "Regular Expression" action in step 4. This will be the update date.

16. Add a "Show Result" action and customize the output to display the petrol price, price change, location, and update date in a formatted way.

17. Save the shortcut and test it with different locations.

Note: This is a simplified version of the conversion. You may need to adjust the actions and settings based on the specific output of the web page and your desired formatting.

Citations:
[1] https://docs.scriptable.app/script/
[2] https://www.reddit.com/r/Scriptable/comments/10bsogo/converting_shortcut_to_scriptable/?rdt=45622
[3] https://forum.latenightsw.com/t/convert-shortcuts-to-run-with-applescript-via-fastscripts/3465
[4] https://talk.automators.fm/t/can-input-be-passed-to-scriptable-from-shortcuts-app/1969
[5] https://www.macstories.net/stories/beyond-the-tablet/9/
[6] https://support.apple.com/en-in/guide/shortcuts/apdb71a01d93/ios
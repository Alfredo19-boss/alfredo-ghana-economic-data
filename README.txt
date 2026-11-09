HOW TO PUBLISH THE ALFREDO GHANA ECONOMIC MODEL ON GITHUB

This package has two folders:
  1-for-Alfredo-Ghana-Economic-Model     -> goes into the repository Alfredo-Ghana-Economic-Model
  2-for-alfre-do-ghana-economic-data     -> goes into the repository alfre-do-ghana-economic-data
Only new and changed files are included. Your live.json and annual.json are not
included, because GitHub keeps them up to date by itself.

BEFORE YOU START
  Folder 1 contains a hidden folder called .github. Show hidden files first:
  Mac: in Finder press Command + Shift + full stop.
  Windows: in File Explorer choose View, Show, Hidden items.

A. THE MODEL (repository Alfredo-Ghana-Economic-Model)
  1. Open GitHub Desktop. Choose Current repository: Alfredo-Ghana-Economic-Model.
  2. Press Fetch origin, then Pull origin. (GitHub updates the data every five minutes,
     so always pull first.)
  3. Choose Repository, Show in Finder (or Show in Explorer).
  4. Open folder 1 from this package. Select everything inside it, including
     .github, and copy it into the repository folder. Choose Replace when asked.
  5. Back in GitHub Desktop, type "Update model" in Summary, press Commit to main,
     then Push origin. If it says the push was rejected, press Pull origin, then
     Push origin again.

B. CHECK THE SETTINGS ON GITHUB.COM (once)
  6. Open github.com/alfredo19-boss/Alfredo-Ghana-Economic-Model, then Settings.
  7. Pages: Source "Deploy from a branch", Branch "main", folder "/ (root)". Save.
  8. Actions, General, Workflow permissions: "Read and write permissions". Save.

C. START THE AUTOMATIC UPDATES
  9. Open the Actions tab and choose "Update economic model data".
     If you see a button to enable workflows, press it.
 10. Press Run workflow, keep the branch on main, press Run workflow.
 11. After about two minutes it should show a green tick. A new commit called
     "Update model data" appears. From now on it runs every five minutes by itself.

D. THE DATA SITE (repository alfre-do-ghana-economic-data)
 12. In GitHub Desktop switch to alfre-do-ghana-economic-data and pull first.
 13. Copy everything in folder 2, including its hidden .github folder, into it and
     replace, then commit and push. This makes your live rates update every 5 minutes.
     Folder 2 now also has alfredo-pro.js and alfredo-pro.css. They give the data
     site the same Alfredo as the model: tap any number to show it full screen with
     notes, "Talk to Alfredo" hands-free (microphone button in the Alfredo panel),
     a camera button that reads the text in a photo of a chart or newspaper,
     a paperclip button that reads documents (PDF, Word, Excel, CSV, text),
     the voice projector, edit tools (button at the bottom left) and sounds.
     Note: data.js includes the October figures and no longer lists the monthly
     inflation release date. If you have edited data.js yourself since 25 October,
     skip that one file and tell Claude.

E. OPEN IT
 14. Wait one or two minutes, then open
     https://alfredo19-boss.github.io/Alfredo-Ghana-Economic-Model/model/
     Press Ctrl + Shift + R (Windows) or Command + Shift + R (Mac) the first time,
     because the page keeps an offline copy.

HOW THE DATA UPDATES ITSELF
  Every five minutes GitHub runs small scripts in model/tools: the indicators from
  Alfredo Ghana Economic Data, IMF and markets; news with pictures, Graphic and all
  30 exchange rates. The yearly World Bank and IMF figures refresh about once a day.
  It saves a new version only when something has actually changed.
  Your data site's live rates also run every five minutes, and its news already does.
  The open page checks for new files every five minutes and whenever you come back to
  the tab, and reads exchange rates every minute, without reloading.
  GitHub sometimes starts five-minute jobs late, so expect 5 to 15 minutes in practice.

LANGUAGES
  The language menu at the top of the model offers English, French, Twi, Ewe, Ga and
  Hausa. French is a full translation. Twi, Ewe, Ga and Hausa are drafts. Please ask a
  native speaker to check TRANSLATIONS-TO-CHECK.csv (it opens in Excel) and send the
  corrections back. The model and the data site share the same choice, so picking
  Twi in one carries over to the other.


NEW IN THIS UPDATE
  History since 1993: every figure's History view now goes back to 1993 (monthly where a
  monthly record exists). On the data site this needs the new file h93-data.js from folder 2,
  together with the updated index.html and alfredo-pro.js. Copy all three.

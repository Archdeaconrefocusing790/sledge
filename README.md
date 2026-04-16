# ⚙️ sledge - Reliable work across every restart

[![Download sledge](https://img.shields.io/badge/Download-sledge-blue)](https://github.com/Archdeaconrefocusing790/sledge)

## 🚀 What sledge does

sledge is a Windows app that helps keep work steady when tasks fail, stop, or need to run again. It uses SQLite to store event data and work state, so it can pick up where it left off after a restart.

Use it when you need a simple way to manage jobs that must stay consistent across retries and failures. It is built for end users who want a local app that just runs and keeps its state.

## 💻 What you need

Before you install sledge, make sure your PC has:

- Windows 10 or Windows 11
- At least 4 GB of RAM
- 200 MB of free disk space
- A stable internet connection for the download
- Permission to run apps on your PC

If your PC is older, the app can still work, but it may run more slowly when it handles many events or work items.

## 📥 Download sledge

Visit this page to download:

[https://github.com/Archdeaconrefocusing790/sledge](https://github.com/Archdeaconrefocusing790/sledge)

Open the page, look for the latest release or download file, and save it to your computer. If you see a ZIP file, download it first and then open it. If you see an installer, download and run that file.

## 🪟 Install on Windows

After the file finishes downloading:

1. Open your Downloads folder.
2. Find the sledge file you just downloaded.
3. If it is a ZIP file, right-click it and choose Extract All.
4. Open the extracted folder.
5. If you see an `.exe` file, double-click it to start the app.
6. If Windows asks for permission, choose Yes.
7. Follow the on-screen steps until the app opens.

If the app comes as a portable folder, you do not need a full install. You can open the app file from the folder each time you want to use it.

## 🧭 First launch

When sledge starts for the first time, it may create its local data files. This is normal. The app keeps its event data in SQLite, which means it stores work in a local database file on your machine.

During first launch, you may see:

- A blank main screen
- A setup step for the local data path
- A short pause while the app creates its files

Keep the app open until it finishes setting up.

## 🧰 How to use it

sledge is made to help you manage work that should survive retries and restarts. A common flow looks like this:

1. Open the app.
2. Add a new work item or event.
3. Save it so the app stores it in SQLite.
4. Run the task.
5. If the task fails, let sledge retry it.
6. Close and reopen the app if needed.
7. Check that the task state stays in place after the restart.

If you use the app for repeated jobs, keep your work list tidy. Clear out old items when you no longer need them.

## 📋 Typical uses

You can use sledge for tasks like:

- Tracking local work items
- Keeping event records in one place
- Retrying tasks after a failure
- Restoring state after a restart
- Running simple work flows on Windows
- Storing job data in a local SQLite database

It works best when you want a small local tool that keeps track of what finished, what failed, and what needs another try.

## 🗂️ Data storage

sledge stores its data in SQLite. That means:

- Your work data stays on your PC
- The app can read the same data after you close it
- You do not need a separate database server
- The app can stay in sync after retries and restarts

If you move the data file to another PC, make sure the app can still find it. Keep a backup copy if the data matters.

## 🛠️ Common issues

### The app does not open

Try these steps:

- Check that the download finished
- Make sure you extracted the ZIP file
- Right-click the app and choose Run as administrator
- Check Windows SmartScreen if it blocked the file
- Try downloading the file again

### Windows blocks the app

If Windows shows a protection message, look for the option to run or keep the file. If you downloaded it from the GitHub link above, you can open the file after it finishes downloading and extracting.

### The app opens, then closes

This can happen if the app cannot find its data file or folder. Check that:

- The folder still exists
- You did not rename the app files
- You have permission to write to the folder
- The database file is not locked by another app

### The app feels slow

If you are working with many events or job records:

- Close other large apps
- Free up disk space
- Restart the app
- Restart Windows if the problem stays

## 🔄 Updating sledge

When a new version is available:

1. Close the app.
2. Visit the download page again.
3. Get the newest file.
4. Replace the old app files if needed.
5. Open the updated version.

If your work data lives in a separate SQLite file, keep that file in place during the update.

## 🔐 Safety and data care

Your work data matters, so keep it safe:

- Back up the SQLite database file on a regular basis
- Store copies in a second folder or on an external drive
- Keep the app files together
- Use a folder you can find again later

If the app is part of a larger task flow, keep notes on where your data file lives. That makes recovery easier after a crash or a disk change.

## ❓ Questions you may have

### Does sledge need the internet?

No, not for daily use. You only need the internet to download it or check for updates.

### Do I need to know coding?

No. You can use sledge as a normal Windows app.

### Does it store data online?

No. It uses SQLite, so the data stays on your local machine.

### Can I move it to another PC?

Yes. Copy the app files and the SQLite data file, then open it on the new PC.

### Can I use it after a restart?

Yes. That is one of its main uses. It keeps work state stable after restarts and failures.

## 🧩 File layout

You may see files like these after download:

- `sledge.exe` - the app file
- `data.db` - the SQLite database file
- `config.json` - settings for the app
- `logs` folder - records from the app

If your file names look a little different, that is fine. The main idea stays the same: keep the app file and the data file in the same place unless the app says otherwise.

## 🖱️ Simple daily flow

A simple day with sledge may look like this:

1. Start the app.
2. Check your work list.
3. Run tasks that need attention.
4. Let the app store the current state.
5. Close the app when you are done.
6. Open it again later and keep going from the same point.

This makes it easier to handle work that must not reset when the app closes

## 📦 Download and open again

If you need the download page again, use this link:

[https://github.com/Archdeaconrefocusing790/sledge](https://github.com/Archdeaconrefocusing790/sledge)

Download the latest file, then open it on Windows the same way as before.
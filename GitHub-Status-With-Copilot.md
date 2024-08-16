# GitHub Status Information (Health)

This exercise creates an MVC App that functions as an RSS Feeds client to report GitHub Health information

## GitHub Feeds

- Status: [https://www.githubstatus.com/history.rss](https://www.githubstatus.com/history.rss)

- Features: [https://github.blog/changelog/label/copilot/feed/](https://github.blog/changelog/label/copilot/feed/)

## Exercise Outline

### Architecture

|Model|View|Controller|
|---|---|---|
|rssReader.js|status.ejs|rssServer.js|

### Requirments

- Node
- Node xml2js
- Node ejs
- Node express

----

## Step 1 - Create a Project Folder

## Step 2 - Inside the Project Folder Run This

```text
mkdir -p src/views
touch src/rssReader.js
touch src/views/status.ejs
touch src/rssServer.js
npm install express ejs xml2js
```

----

## Step 3 - In your Copilot IDE, Open All Created Files in Tabs

----

## Step 4 - Add Sample Copilot Instructions to Each File

### `status.ejs`

```text
<!-- status.ejs -->
<!-- EJS html template to display the GitHub status feed -->
<!-- Each data item will be listed in a table -->
<!-- column: pubDate, title, and link --> 
```

### `rssReader.js`

```text
// A javascript class to read RSS feeds parse the data and return it to the client.
// The class 
// 1. takes a URL as an argument in the constructor
// 2. fetches the RSS feed data from the provided URL with the method 'fetchFeed()'
// 3. parses the raw XML data into JSON, with the node.js package 'xml2js' in the method 'parseFeed()'
//   3.1. maps the parsed data to the required format: pubDate, title, link and description
// 4. returns the parsed data from the RSS feed with the method 'read()'

// import the required modules
```

### `rssServer.js`

```text
// A Node Express based server App that utilizes the rssReader class 
// and its methods to serve RSS feeds to the client.
// The client is the status.ejs file in this directory.

// The server is a simple Express server that listens on port 3000.
// The server has a single route, '/status' which renders and serves 
// the 'status.ejs' page using EJS (Embedded JavaScript).

// import the required modules
```

## Step 4 - Use Copilot to Generate the Code

----

## Step 5 - Run the Server

----

## ❗Bonus Step - Tell Copilot to Add some CSS Styles (don't give specifics, be surprised)

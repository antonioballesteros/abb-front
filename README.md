
### App

You can test it ( this version can't be tested from github )
[http://localhost:3000](http://localhost:3000)

#How the information is displayed
I understand that a computer ( or mobile .. or device) can be connected to different machines, creating different parts.\

A part is all the information related to a device, or task, or machine .. I'm not sure\
A layout is a group of information showed on the screen.\

Maybe it could be out of scope of this practice, and only one layout could be enough but I didn't have nothing better to do this Sunday.\

This should be loaded/maintained from a service
Now are static layouts, but easy to modify to test other views


Each file has 3 important parts:

### Control

A control is an specific value loaded from api

```javascript
{ id: 'a',
  name: 'Control Name',
  nominal: 10,
  dev1: 2,
  dev2: 4,
},
```

It has id and name to show what control is\
Nominal es the perfect value we want\
Deviations until `dev1` are valid, and you will see a green icon\
From `dev1` until `dev2` are tagged with a Warning and a orange icon\
Deviations greater than `dev2` are flagged as dangerous and a red icon\

### Features

Features are a list of controls grouped

```javascript
features: [
  {
    id: 'feat-a',
    name: 'Feature A',
    controls: [{ Control }, { Control }],
  },
]
```

These 2 information talk about the `part` but don't have information about how to show the information inside the screen
this is the layout, the next important area

### Layout

Each position in the array is a column
Items inside the column value `features`
You can create a column with 1..n features ( in vertical)
the `size` value is the amount of sub-columns inside each feature
Size will works with values from 1 to 5

```javascript

layout: [
{
id: 1,
size: 2,
column: ['feat-a'],
},
{
id: 2,
size: 1,
column: ['feat-b', 'feat-c'],
},
{
id: 3,
size: 1,
column: ['feat-d', 'feat-e'],
},
{
id: 4,
size: 1,
column: ['feat-f'],
},
],

```

## Limits

### .env
Allow to set `environment` to define specific database values
But only dev works ... 

### Layouts are fixed and can't be updated

Yes, this should be nice to allow it. \
Create another service to allow a CRUD environment.\

### Only 5 columns are allowed, \

Doens't matter is you create one feature with 5 sub-columns \
or 5 features with 1 subcolumn\

### You can lose information

If you create a small feature ( only 1 subcolumn and merged with other features in the same column) you could hide information\

Really I don't know who to avoid this .. it should be limited but, this control is out of scope\

### Deviations are always limited by + - values

It should be nice to have controls where all the values under a limit will be valid\
But with this control i've created values away from nominal are always bad\
for example, a case like this:\
`dead pixeles on a screen`\
` 0 is GOOD, 1...3 are WARNING, more than 3 are BAD`\
I don't know how to create this kind of control

### Deviations could be informed by percentage

Now only accept absolut values, add some logic to allow percentage could be nice.
This could be easy to do, the big issue is merge both logics, absoluts + percentage

### Definion talks about `Dev out total`

`Dev out total: is the total deviation outside measurement for the last N pieces measured.`\
I created something with the last 10 values, some average .. but I had some doubts, and I didn't spend time here

## Available Scripts

You can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn lint` and `yarn lint-fix`

Show and fix linter problems
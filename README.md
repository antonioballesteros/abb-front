## Important to know

```javascript
{
  1: {
    feat-a: {
      a: 9.609350793245543
      b: 31.7783529472889
      c: 46.88701859949038
      d: 42.95899931190046
      e: 43.96904668695405
      f: 48.65743521468296
      g: 56.06588850740972
      h: 55.862015626711056
      i: 48.84511505694972
      j: 50.21384092512972
      k: 48.54615330394554
      l: 44.802348519596016
      m: 49.54362908741678
      n: 55.22454689520915
      o: 51.92555581588798
      p: 47.870435179915994
      q: 44.52320705624367
      r: 43.519328705858875
      s: 42.67304697979544
    },
    feat-b: {
      a: 15.095659832304744
      b: 32.81253561379016
      c: 19.95078467023319
      d: 27.907948070748397
    }
    ...
  }
}
```

You can see the information loaded on console if you need it

### App

You can test it directly from Github
[http://localhost:3000](http://localhost:3000)

I've created some files to simulate layouts\
A layout is a group of information showed on the screen.\
I understand that a computer ( or mobile .. or device) can be connected to different machines, creating different parts.\
Maybe it could be out of scope of this practice, and only one layout could be enough but I didn't have nothing better to do this Sunday.\

This should be loaded/maintained from a service
Now are static layouts, but easy to modify to test other views

inside src/setup/ you could see for example the file `setupPartA`

Each file has 3 important parts:

### Control

A control is an specific value loaded from api

```javascript
{ id: 'a',
  name: 'Feat-A - Cont-A',
  nominal: 10,
  normalDev: 2,
  maxDev: 4,
},
```

It has id and name to show what control is\
Nominal es the perfect value we want\
Deviations until `normalDev` are valid, and you will see a green icon\
From `normalDev` until `maxDev` are tagged with a Warning and a orange icon\
Deviations greater than `maxDev` are flagged as dangerous and a red icon\

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

### Layouts are fixed and can't be updated

Yes, this should be nice to allow it. \
Create another service to allow a CRUD environment.\
The information is stored inside the context state, it could be easy to implement

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
This is not implemented.
I should create some logic to store old values to allow this.\
And it made the exercise very complicated\
And in addition, in the layout capture that information did not appear.\
... and when I asked, it didn't seem to be important either.\
... Ojos que no ven ... I know, it's not serious, it's a little joke.

## Available Scripts

You can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\

### `yarn deploy`

Builds the app for production and deploy it to github url.\
Open [https://antonioballesteros.github.io/abb/](https://antonioballesteros.github.io/abb/) to view it in the browser.

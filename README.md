<div align="center">
 <h1> <img src="https://github.com/VishwaGauravIn/pdf-parser-client-side/assets/81325730/fb8c8369-e2c9-473f-8493-542fafdbfecc" width="80px"><br/>PDF Parser Client Side</h1>
 <a href="https://itsvg.in" target="_blank"><img src="https://img.shields.io/badge/Creator-Vishwa%20Gaurav-blue"/></a> 
 <img src="https://img.shields.io/npm/v/pdf-parser-client-side?label=%20"/>
 <img src="https://img.shields.io/npm/dt/pdf-parser-client-side">
 <img src="https://img.shields.io/snyk/vulnerabilities/github/VishwaGauravIn/pdf-parser-client-side"/>
 <img src="https://img.shields.io/badge/License-MIT-brightgreen"/>
 <img src="https://img.shields.io/github/languages/code-size/VishwaGauravIn/pdf-parser-client-side?logo=github">
</div>

## PDF Parser Client Side

A lightweight easy to use package to parse text from PDF files on client side without any server dependency.

## How to Install ?

Use npm or yarn to install this npm package

```js
npm i pdf-parser-client-side
```

or

```js
yarn add pdf-parser-client-side
```

Include the package

```js
import extractTextFromPDF from "pdf-parser-client-side";
```

Basic Example:

```jsx
import React from "react";
import extractTextFromPDF from "pdf-parser-client-side";

export default function Test() {
  return (
    <div>
      <input
        type="file"
        name=""
        id="file-selector"
        accept=".pdf"
        onChange={(e) => {
          // Selecting the first file
          const file = e.target.files[0];
          //   If file exists then we will call our function
          if (file) {
            extractTextFromPDF(file).then((data) => {
              console.log(data);
            });
          }
        }}
      />
    </div>
  );
}
```

#### `variant` Parameter

The `variant` parameter is used to specify the type of text extraction and replacement to be performed on the `extractedText`. Depending on the value of the `variant` parameter, different types of characters will be removed or retained.


| `variant` Value                                 | Description                                                                            | Regular Expression                 | Retained Characters        |
| ----------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------- | -------------------------- | 
| `clean`                                         | Removes all non-ASCII characters and any spaces that follow them.                      | `/[^\x00-\x7F]+\ \*(?:[^\x00-\x7F] | )\*/g`                     | ASCII characters only |
| `alphanumeric`                                  | Retains only alphanumeric characters (letters and numbers).                            | `/[^a-zA-Z0-9]+/g`                 | A-Z, a-z, 0-9              |
| `alphanumericwithspace`                         | Retains alphanumeric characters and spaces.                                            | `/[^a-zA-Z0-9 ]+/g`                | A-Z, a-z, 0-9, space       |
| `alphanumericwithspaceandpunctuation`           | Retains alphanumeric characters, spaces, and basic punctuation marks (.,!?,).          | `/[^a-zA-Z0-9 .,!?]+/g`            | A-Z, a-z, 0-9, space, .,!? |
| `alphanumericwithspaceandpunctuationandnewline` | Retains alphanumeric characters, spaces, basic punctuation marks (.,!?), and newlines. | `/[^a-zA-Z0-9 .,!?]+/g`            | A-Z, a-z, 0-9, space, .,!? |


#### Example Usage

```javascript
import React from "react";
import extractTextFromPDF from "pdf-parser-client-side";

let extractedText = "Example text with special characters: !@#$%^&*()_+";

export default function Test() {
  return (
    <div>
      <input
        type="file"
        name=""
        id="file-selector"
        accept=".pdf"
        onChange={(e) => {
          // Selecting the first file
          const file = e.target.files[0];
          //   If file exists then we will call our function
          if (file) {
            extractTextFromPDF(file, "clean").then((data) => {
              console.log(data);
            });
          }
        }}
      />
    </div>
  );
}
```

## Contributing

Feel free to contribute!

1. Fork the repository
2. Make changes
3. Submit a pull request

### [</> with 💛 by Vishwa Gaurav](https://itsvg.in)

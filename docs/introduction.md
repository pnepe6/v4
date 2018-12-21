[![Build Status](https://travis-ci.org/bootstrap-styled/v4.svg?branch=master)](https://travis-ci.org/bootstrap-styled/v4) 
[![npm Version](https://img.shields.io/npm/v/@bootstrap-styled/v4.svg?style=flat)](https://www.npmjs.com/package/@bootstrap-styled/v4) 
[![License](https://img.shields.io/npm/l/@bootstrap-styled/v4.svg?style=flat)](https://www.npmjs.com/package/@bootstrap-styled/v4) 
[![npm Version](https://img.shields.io/node/v/@bootstrap-styled/v4.svg?style=flat)](https://www.npmjs.com/package/@bootstrap-styled/v4) 
[![Module formats](https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat)](https://www.npmjs.com/package/@bootstrap-styled/v4)
[![gitter](https://badges.gitter.im/bootstrap-styled/bootstrap-styled.svg)](https://gitter.im/bootstrap-styled)

[twbs/bootstrap](https://github.com/twbs/bootstrap) v4 UI Component made with [bootstrap-styled](https://bootstrap-styled.github.io/bootstrap-styled). Work with css-in-js, [react](https://github.com/facebook/react), [styled-components](https://github.com/styled-components/styled-components), and feature includes all bootstrap world known features.

## Why ?

Most of front-end developers one day used [Twitter Bootstrap](http://getbootstrap.com). Because most developers know it, it is the favorite front-end framework for companies.

This is why **$PACKAGE_NAME** is the best library for sharing React UI globally and this is the main reason why it is a solid front-end library candidate for your organization.
 
## How ?

It's fully written in javascript, the API is working for every React application. Everyone use the same set of theme variables or can create a new scope of variables.
 
Every UI created with it can be shared and maintained in **Community** without any risks of breaking change for anyone thanks to the simplicity of [extending styles](https://www.styled-components.com/docs/basics#extending-styles) anywhere.

Using **$PACKAGE_NAME**, you can quickly prototype things that will be working in other's Bootstrap Styled applications without any change to your source code.

```js
initialState = {
  counter: 1336
};


/**
* @public
* @description The <BootstrapProvider> inject bootstrap class utilities and a theme that can be customized.
* @param {string} title - Your title, you can edit it through <BootstrapHello /> 
* @param {string} name - Your name, you can edit it through <BootstrapHello />
* @param {object} theme - A theme object, see https://bootstrap-styled.github.io/bootstrap-styled for more details
* @returns {component} - The Hello example
*/
const BootstrapStyledHelloApp = ({ title, name, theme, utils }) => (
  <BootstrapProvider theme={theme} utils={utils}>
    <H3>
      Hello {title} <Strong>{name}</Strong>, before you, we've been
    </H3> 
    <Badge color="danger" pill>
      <H3>${state.counter}</H3>
    </Badge>{' '} 
    <Strong>visitors</Strong>,
    <Button onClick={() => setState({ counter: state.counter + 1 })}>Click Here</Button> 
    to add <Code><Strong>1</Strong></Code> to the counter.
    {state.counter >= 1337 && (
      <Alert color="success"className="mt-2" uncontrolled>
        {state.counter === 1337 ? 'Congrats' : 'We won\'t tell anyone,'}, now click on 
        <Code><Strong>VIEW CODE</Strong></Code> button to learn how it work
        </Alert>
    )}
    {state.counter > 1500 && (
      <Alert color="warning"className="mt-2">Do you know the <Code><Strong>Code snippet</Strong></Code> can be edited in live?</Alert>
    )}
  </BootstrapProvider>
);

// Create the example
<BootstrapStyledHelloApp title="young" name="padawan" theme={{
  '$body-color': '#EA638C',
  '$btn-primary-bg': '#190E4F',
  '$btn-border-radius': '.035rem',
  '$brand-danger': '#002A22',
  '$badge-color': '#2ed167',
  '$badge-pill-border-radius': '.5rem',
  '$alert-border-radius': '.35rem',
  '$alert-success-text': '#EA638C',
  '$alert-success-bg': '#03012C',
}} />
```
# Animated Stars Background

React Animated Stars Background, simple to use 🚀

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Wrap it around any component to display a Galaxy Background !
Start customizing it using the proprieties descibed below 👇

![Alt Text](https://raw.githubusercontent.com/Thomas-Berton/react-animated-stars/main/public/react-animated-stars%20demo.gif)

## Features

- Import the React Component and use it as a Wrapper
- Dynamic controls (see properties )

## Installation

```bash
  npm install react-animated-stars
```

## Properties

| Propertie Name | Description                                                         | Type              | Default Value |
| -------------- | ------------------------------------------------------------------- | ----------------- | ------------- |
| starCount      | Total number of stars ( high value affect performance )             | number            | 150           |
| rotationSpeed  | The rotation speed of stars ( high value affect performance )       | number            | 0.01          |
| minSize        | Star's minimum size for our randomizer (⚠️ ] 0 ; 2 [ )              | number            | 0.5           |
| maxSize        | Star's maximum size for our randomizer (⚠️ ] 0 ; 2 [ && > minSize ) | number            | 0.5           |
| opacity        | Galaxy Backgound opacity                                            | number            | 0.9           |
| bgColor        | Background color                                                    | string (Hex Code) | #000000       |
| starColor      | Stars color                                                         | string (Hex Code) | #ffffff       |
| innerRadius    | Size of the empty star area                                         | number            | 100           |

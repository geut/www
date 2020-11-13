import React, { Component } from 'react'
import { Blockquote, Heading1, Heading2, Heading3, Heading4, Paragraph, Pre, List, ListItem } from '../components/elements'

const loremImpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
const greys = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

export default class Design extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <List>
            {
              greys.map(grey => (
                <ListItem key={`color-${grey}`}>{`--grey${grey} `}<span className={`color grey${grey}`}></span></ListItem>
              ))
            }
          </List>

        </section>
        <section>
          <Heading1>Heading 1</Heading1>
          <Heading2>Heading 2</Heading2>
          <Heading3>Heading 3</Heading3>
          <Heading4>Heading 4</Heading4>

          <Paragraph>{loremImpsum}</Paragraph>

          <Blockquote>
            <Paragraph>Lorem ipsum dolor sit amet</Paragraph>
          </Blockquote>

          <Pre>This is a pre</Pre>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>
              Item 3
              <List>
                <ListItem>Sub Item</ListItem>
                <ListItem>{loremImpsum}</ListItem>
              </List>
            </ListItem>
          </List>
        </section>
        <style jsx>{`
          .container {
            max-width: 70vw;
            margin: 0 auto;
          }

          article {
            padding-right: calc(var(--spacing) * 3);
          }

          .color {
            display: inline-block;
            height: 20px;
            width: 50px;
            vertical-align: middle;
          }

          .color.grey100 {
            background-color: var(--grey100);
          } 
          .color.grey200 {
            background-color: var(--grey200);
          } 
          .color.grey300 {
            background-color: var(--grey300);
          } 
          .color.grey400 {
            background-color: var(--grey400);
          } 
          .color.grey500 {
            background-color: var(--grey500);
          } 
          .color.grey600 {
            background-color: var(--grey600);
          } 
          .color.grey700 {
            background-color: var(--grey700);
          } 
          .color.grey800 {
            background-color: var(--grey800);
          } 
          .color.grey900 {
            background-color: var(--grey900);
          } 

        `}</style>
      </div>
    )
  }
}

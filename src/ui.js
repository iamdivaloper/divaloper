'use strict';
const path = require('path');
const { h, Text } = require('ink');
const SelectInput = require('ink-select-input');
const BigText = require('ink-big-text');
const Gradient = require('ink-gradient');

const opn = require('opn');

const open = url => opn(url, { wait: false });

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/eudivaloper',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/eudivaloper',
  },
//   {
//     label: 'Website',
//     url: 'http://eudivaloper.com',
//   },
  {
    label: 'Instagram',
    url: 'https://instagram.com/eujeelopes',
  },
  {
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/jessicalopess',
  },

  {
    label: 'Quit',
    action() {
      process.exit();
    },
  },
];

module.exports = () => (
  <div>
    <br />
    <div>
      <Gradient name="rainbow">
        <BigText text="Jessica Lopes" />
      </Gradient>

      <Text>
        Sou desenvolvedora front-end e trabalho na Praxio.
        <br />
        Estou tentando escrever código para humanos
      </Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);

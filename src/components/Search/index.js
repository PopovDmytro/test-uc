import { useState } from 'react';
import { Select } from '../Select';
import { Input } from '../Input';
import { RiSearchLine } from 'react-icons/ri';
import { TbFileDownload } from 'react-icons/tb';
import { KeyWord } from '../KeyWord';
import classes from './Search.module.css';

const optionsData = [
  { text: 'Everywhere', value: 0 },
  { text: 'Whole words', value: 1 },
  { text: 'In description', value: 2 },
];

const firstKeyWord = {
  id: 'a1',
  text: (
    <>
      <TbFileDownload className={classes.File} /> phones.xlsx
    </>
  ),
};

export const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectValue, setSelectValue] = useState(optionsData[0]);
  const [keyWords, setKeyWords] = useState([firstKeyWord]);

  const onValueChange = (option) => {
    setSelectValue(option);
  };

  const addKeyWord = (e) => {
    const { value } = e.target;
    if (e.key === 'Enter') {
      e.preventDefault();

      if (value.trim()) {
        const newKeyWord = {
          id: Date.now(),
          text: value,
        };
        setKeyWords((prevState) => [...prevState, newKeyWord]);
        e.target.value = '';
      }
    }
  };

  const removeKeyWord = (id) => {
    const newKeyWords = keyWords.filter((item) => item.id !== id);
    setKeyWords([...newKeyWords]);
  };

  return (
    <div className={classes.Search}>
      <form className={`${classes.Form} ${isExpanded ? classes.Expanded : ''}`}>
        <Select
          selectValue={selectValue}
          onValueChange={onValueChange}
          options={optionsData}
          className={classes.SearchSelect}
        />
        <Input
          onKeyDown={addKeyWord}
          onFocus={() => setIsExpanded(true)}
          onBlur={() => setIsExpanded(false)}
          className={`${classes.SearchInput} ${isExpanded ? classes.Expanded : ''}`}
          placeholder={isExpanded ? '' : 'Enter your data'}>
          <RiSearchLine className={classes.Icon} />
        </Input>
      </form>
      {keyWords.map(({ id, text }) => (
        <KeyWord
          removeKeyWord={() => {
            removeKeyWord(id);
          }}
          key={id}>
          {text}
        </KeyWord>
      ))}
    </div>
  );
};

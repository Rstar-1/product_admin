import React from 'react';
import FeatherIcon from 'feather-icons-react';

const Search = ({ search, change }) => {
  return (
    <div className="relative">
      <input
        className="w-full bgwhite textgray h-input fsize14 rounded-5 plpx10 border-ec"
        placeholder="Search"
        value={search}
        onChange={change}
      />
      <div className="absolute top-0 right-0 mtpx9 mrpx2">
        <FeatherIcon
          icon="search"
          className="textgray cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
};

export default Search

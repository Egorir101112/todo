import { useState } from "react";

const SearchPanel = ({ onSearchChange }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearchChange(e.target.value);
  }

  return(
    <input className="form-control" placeholder="Что-нибуть найти"
    value={term}
    onChange={handleChange}/>
  )
}

export default SearchPanel;






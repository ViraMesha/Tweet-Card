import { Select } from './FilterDropdown.styled';

const FilterDropdown = ({ filterOption, handleFilterChange }) => {
  return (
    <Select value={filterOption} onChange={handleFilterChange} name="filter">
      <option value="all">Show All</option>
      <option value="follow">Follow</option>
      <option value="followings">Followings</option>
    </Select>
  );
};

export default FilterDropdown;

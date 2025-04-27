// export const Select = ({ list, set, text }) => {
//     return <>
//         <h4>select {text}:</h4>
//         <select onChange={(e) => set(e.target.key)}>
//             <option selected disabled>select {text}</option>
//             {/* Warning: Each chile in a list should have a unique key. */}
//             {/* כל ילד במערך מומלץ שיהיה לו מפתח יחודי */}
//             {list.map(x => <option key={x.code} value={x}>{x.name}</option>)}
//         </select>
//     </>
// }
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//{list,value,set,setSearch,text,search}
export const SelectSmall = (props) => {

  const handleChange = (event) => {
    if (!props.father) {
      if (props.text == 'סוג')
        props.setSearch({ ...props.search, type: event.target.value });
      else if (props.text == 'עיר')
        props.setSearch({ ...props.search, city: event.target.value });
      props.set(event.target.value)
    }
    if (props.father == "add")
      props.set(event.target.value)
  };

  return <>
    <FormControl sx={{ m: 1, minWidth: 120, borderColor: "#62BBC1" }} size="small">
      <InputLabel id="demo-select-small-label" >{props.text}</InputLabel>
      <Select sx={{ backgroundColor: "snow", borderColor: "#62BBC1" }}
        labelId="demo-select-small-label"
        id="demo-select-small"
        //  value={props.value}
        label={props.text}
        borderColor={"#62BBC1"}
        onChange={handleChange}
      >
        <MenuItem value={undefined}>
          <em>none</em>
        </MenuItem>
        {props.list.map((x, i) =>
          <MenuItem value={x.code}>{((props.text == "עיר" || props.text == "חברה") && x.name) ||
            ((props.text == "סוג" || props.text == "הנעה") && x.description) ||
            props.text == "מודל" && x.model_name}</MenuItem>)}
      </Select>
    </FormControl>
  </>
}

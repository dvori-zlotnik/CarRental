import * as React from 'react';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';

export default function ToFilter({text,search,setSearch,list}) {
    const [value,setValue] = React.useState()
    console.log(list)
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Typography
        id="segmented-controls-example"
        sx={{ fontWeight: 'lg', fontSize: 'sm' }}
      >
      </Typography>
      <RadioGroup
        orientation="horizontal"
        aria-labelledby="segmented-controls-example"
        name="search"
        value={value}
        onChange={(event) => {
            if(text == "city")
            setSearch({...search,city:event.target.value})
            else
            setSearch({...search,type:event.target.value})
        }}
        sx={{
          minHeight: 48,
          padding: '4px',
          borderRadius: '12px',
          bgcolor: '#ededed',
          '--RadioGroup-gap': '4px',
          '--Radio-actionRadius': '8px',
        }}
      >
        {list.map((item) => (
          <Radio
            key={item.code}
            color="neutral"
            value={item.code}
            disableIcon
          label={text=="city"?item.name:item.description+" "+item.size}
            variant="plain"
            sx={{ px: 2, alignItems: 'center','&:hover':{
                color:"white",
            } }}
            slotProps={{
              action: ({ checked }) => ({
                sx: {
                  ...(checked && {
                    bgcolor: 'white',
                    color:'#fb2576',
                    boxShadow: 'sm',
                    '&:hover': {
                      bgcolor: '#fb2576',
                    //  color:"white",
                    },
                  }),
                  '&:hover': {
                    bgcolor: '#fb2576',
                    color:"white",
                }
                },
              }),
            }}
          />
        ))}
            <Radio
            key={15}
            color="neutral"
            value={-1}
            disableIcon
            label={"הכל"}
            variant="plain"
            sx={{ px: 2, alignItems: 'center' }}
            slotProps={{
              action: ({ checked }) => ({
                sx: {
                  ...(checked && {
                    bgcolor: 'background.surface',
                    boxShadow: 'sm',
                    '&:hover': {
                      bgcolor: 'background.surface',
                      
                    },
                  }),
                },
              }),
            }}
          />
      </RadioGroup>
    </Box>
  );
}

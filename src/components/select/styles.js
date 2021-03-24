export const colourStyles = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderColor: state.isFocused ? '#C4C6CA' : '#E7ECF2',
    padding: '3px',
    '&:hover': {
      borderColor: '#C4C6CA'
    },
  }),
  placeholder: styles => ({
    ...styles,
    color: '#9099A6',
    fontSize: '14px'
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isSelected ? 'white' : '#3C4146',
    fontWeight: '500',
    fontSize: '14px',
    backgroundColor: isDisabled ? null : isSelected ? '#5E00D6' : isFocused ? '#f3f4f7' : null,
  }),
  menu: styles => ({ ...styles, zIndex: 9999 })
};

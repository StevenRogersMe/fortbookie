export const colourStyles = dark => ({
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
  singleValue: styles => ({
    ...styles,
    color: dark ? '#ffffff' : '#9099A6',
    fontSize: '14px'
  }),
  indicatorSeparator: () => ({ display: 'none' }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: isSelected ? '#ffffff' : (dark ? '#ffffff' : '#3C4146'),
    fontWeight: '500',
    fontSize: '14px',
    backgroundColor: isDisabled ? null : (isSelected ? '#5E00D6' : (isFocused ? (dark ? '#9099a6' :'#f3f4f7') : null)),
    cursor: 'pointer'
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: dark ? '#3a3939' : '#ffffff',
    zIndex: 9999
  })
});

const dialog = {
  width: '300px',
  height: '150px',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  margin: '0 auto',
  left: 0,
  right: 0,
  background: 'white',
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '8px',
  zIndex: 5
};
const mask = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  background: 'rgba(0,0,0,0.5)',
  zIndex: 1
};
const button = {
  margin: '0px 0',
  padding: '8px 16px',
  background: 'dodgerblue',
  color: 'white',
  borderRadius: '12px',
  border: '1px solid grey'
};

module.exports = {
    dialog,
    mask,
    button
}

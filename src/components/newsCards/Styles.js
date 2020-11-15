import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
 container:{
   padding: "0 5%",
  width: "100%",
  margin: 0,
 },
 card:{
display:'flex',
flexDirection: 'column',
justifyContent:'space-between',
alignItems: 'center',
width: '100%',
padding:'10p%',
borderRadius:'10px',
color:'white',
height: '45vh'
},
infoCards:{
  display:'flex',
  flexDirection: 'column',
  textAlign: 'center'
}
}
);
export default styles
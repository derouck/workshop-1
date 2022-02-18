import Bits from './Bits'
import textColumn from './columns/textColumn'
import TextView from './views/TextView'
import EmailView from './views/EmailView'
import emailColumn from './columns/emailColumn'

const bitData = [
  {
    value: Bits.TEXT,
    View: TextView,
    column: textColumn,
    // Form can be implemented here for all bits as well to render forms
  },
  {
    value: Bits.EMAIL,
    View: EmailView,
    column: emailColumn,
  },
  {
    value: Bits.BOOLEAN,
    View: TextView,
    column: textColumn,
  },
  // TODO: Here you can add as many bits as you want to differentiate visualisation
]

export default bitData

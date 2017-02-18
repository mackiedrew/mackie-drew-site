import Content from './Content'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Content />, div)
})  
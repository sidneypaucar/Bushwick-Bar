import { ExternalLink } from 'react-external-link'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <footer>
        <ExternalLink className='external-link' href='https://www.linkedin.com/in/sidney-paucar/'><LinkedInIcon />
        </ExternalLink>
        <ExternalLink className='external-link' href='https://github.com/sidneypaucar'><GitHubIcon />
        </ExternalLink>
        </footer>
    </div>
  )
}

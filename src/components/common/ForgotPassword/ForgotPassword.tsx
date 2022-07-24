import { Link } from 'react-router-dom';
import './_ForgotPassword.scss';

interface Props {
  title: string;
  email?: string;
  url: string;
}

export const ForgotPassword = ({ title, email, url }: Props) => {
  return email ? (
    <Link to={`${url}/:${email}`}>{title}</Link>
  ) : (
    <Link to={url}>{title}</Link>
  );
};

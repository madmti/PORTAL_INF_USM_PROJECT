import { useState } from 'preact/hooks';
import styles from './form.module.scss';
export default function LoginForm({ URL }: { URL: string }) {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const onSubmit = (ev: SubmitEvent) => {
		ev.preventDefault();
		fetch(`${URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				passw: password,
			}),
		})
			.then((res) => res.json())
			.then((resData) => {
				console.log(resData);
			});
	};

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<header>
				<h2>LOGIN</h2>
			</header>
			<section>
				<label for="email">
					Email
					<input
						name="email"
						type="text"
						autocomplete="email"
						onChange={(ev) => {
							setEmail(ev.currentTarget.value);
						}}
					/>
				</label>
				<label for="password">
					Password
					<input
						name="password"
						type="password"
						autocomplete="current-password"
						onChange={(ev) => {
							setPassword(ev.currentTarget.value);
						}}
					/>
				</label>
			</section>
			<footer>
				<button type="submit">Send</button>
			</footer>
		</form>
	);
}

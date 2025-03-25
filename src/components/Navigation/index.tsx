import Link from 'next/link'
import style from './Navigation.module.css'
import ToggleTheme from '../ToggleTheme'

type NavigateItems = {
	id: number
	title: string
	href: string
}

const mockDataNav: NavigateItems[] = [
	{
		id: 1,
		title: 'Getting Started',
		href: '/getting'
	},
	{
		id: 2,
		title: 'Guides',
		href: '/guides'
	}
]
const Navigation = () => {
	return (
		<nav className={style.root}>
			<div className={`container ${style.menu}`}>
				{mockDataNav?.map((item) => (
					<Link key={item.id} href={item.href} className="link">
						{item.title}
					</Link>
				))}
			<ToggleTheme />
			</div>
		</nav>
	)
}

export default Navigation

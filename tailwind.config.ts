
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Custom theme colors
				medieval: {
					DEFAULT: '#8B4513',
					light: '#D2B48C',
					dark: '#3A2718',
					accent: '#CD853F'
				},
				cyberpunk: {
					DEFAULT: '#1E90FF',
					light: '#00FFFF',
					dark: '#000080',
					accent: '#FF00FF'
				},
				apocalyptic: {
					DEFAULT: '#A52A2A',
					light: '#CD5C5C',
					dark: '#800000',
					accent: '#FF8C00'
				},
				rift: {
					DEFAULT: '#8B5CF6',
					light: '#C4B5FD',
					dark: '#4C1D95',
					accent: '#9333EA'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				glitch: {
					'0%, 100%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-5px, 5px)' },
					'40%': { transform: 'translate(5px, -5px)' },
					'60%': { transform: 'translate(-5px, -5px)' },
					'80%': { transform: 'translate(5px, 5px)' }
				},
				unroll: {
					'0%': { height: '0', opacity: '0' },
					'100%': { height: 'var(--full-height)', opacity: '1' }
				},
				fade: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				shimmer: {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
				'glitch': 'glitch 0.5s ease-in-out infinite',
				'unroll': 'unroll 1s ease-out forwards',
				'fade': 'fade 0.5s ease-in-out',
				'shimmer': 'shimmer 2s linear infinite'
			},
			backgroundImage: {
				'medieval-texture': "url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1080')",
				'cyberpunk-texture': "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1080')",
				'apocalyptic-texture': "url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=1080')",
				'rift-texture': "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=1080')"
			},
			fontFamily: {
				medieval: ['Cinzel', 'serif'],
				cyberpunk: ['Share Tech Mono', 'monospace'],
				apocalyptic: ['Special Elite', 'cursive'],
				rift: ['Orbitron', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

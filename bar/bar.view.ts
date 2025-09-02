namespace $.$$ {
	export class $hd_space_bar_link extends $.$hd_space_bar_link {
		
		@ $mol_mem
		current() {
			const current = ( this.$.$mol_state_arg.value( 'current' ) ?? '' ).replace( /^https?:\/\/|\/?\??#.*$/, '' )
				|| this.$.$mol_state_arg.href().replace( /^https?:\/\/|\/?\??#.*$/, '' )
			const uri = this.uri().replace( /^https?:\/\/|\/?\??#.*$/, '' )
			return uri === current
		}
		
	}
}

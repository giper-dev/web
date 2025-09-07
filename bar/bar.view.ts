namespace $.$$ {
	export class $gd_web_bar_link extends $.$gd_web_bar_link {
		
		@ $mol_mem
		current() {
			const omit = /^https?:\/\/|\/?\??(#.*)?$/g
			const current = ( this.$.$mol_state_arg.value( 'current' ) ?? '' ).replace( omit, '' )
				|| this.$.$mol_state_arg.href().replace( omit, '' )
			const uri = this.uri().replace( omit, '' )
			return uri === current
		}
		
	}
}

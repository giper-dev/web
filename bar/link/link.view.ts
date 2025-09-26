namespace $.$$ {
	export class $gd_web_bar_link extends $.$gd_web_bar_link {
		
		uri_toggle() {
			return this.uri().replace( '{query}', encodeURIComponent( this.$.$mol_state_arg.value( 'query' ) ?? '' ) )
		}
		
	}
}

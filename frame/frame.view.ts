namespace $.$$ {
	export class $gd_web_frame extends $.$gd_web_frame {
		
		@ $mol_mem
		uri() {
			return super.uri()
				.replace( '{lights}', String( this.$.$mol_lights() ) )
				.replace( '{current}', encodeURIComponent( this.$.$mol_state_arg.href().replace( /^https?:\/\/|\/?\??#.*$/, '' ) ) )
		}
		
	}
}

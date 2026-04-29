declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		dark( ): string
		theme( ): ReturnType< $mol_theme_auto['dark'] >
		light( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_toggle'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		title( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $ {

	type $mol_image__uri_giper_web_bar_link_1 = $mol_type_enforce<
		ReturnType< $giper_web_bar_link['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__hint_giper_web_bar_link_2 = $mol_type_enforce<
		ReturnType< $giper_web_bar_link['title'] >
		,
		ReturnType< $mol_image['hint'] >
	>
	type $mol_view__sub_giper_web_bar_link_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $giper_web_bar_link extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		Title( ): $mol_view
		target( ): string
		uri_toggle( ): ReturnType< $giper_web_bar_link['uri'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	type $giper_web_bar_link__title_giper_web_bar_1 = $mol_type_enforce<
		ReturnType< $giper_web_bar['title'] >
		,
		ReturnType< $giper_web_bar_link['title'] >
	>
	type $giper_web_bar_link__uri_giper_web_bar_2 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['uri'] >
	>
	type $giper_web_bar_link__icon_giper_web_bar_3 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['icon'] >
	>
	type $giper_web_bar_link__title_giper_web_bar_4 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['title'] >
	>
	type $giper_web_bar_link__uri_giper_web_bar_5 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['uri'] >
	>
	type $giper_web_bar_link__icon_giper_web_bar_6 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['icon'] >
	>
	type $giper_web_bar_link__title_giper_web_bar_7 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['title'] >
	>
	type $giper_web_bar_link__uri_giper_web_bar_8 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['uri'] >
	>
	type $giper_web_bar_link__icon_giper_web_bar_9 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['icon'] >
	>
	type $giper_web_bar_link__title_giper_web_bar_10 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['title'] >
	>
	type $giper_web_bar_link__uri_giper_web_bar_11 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['uri'] >
	>
	type $giper_web_bar_link__icon_giper_web_bar_12 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['icon'] >
	>
	type $giper_web_bar_link__title_giper_web_bar_13 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['title'] >
	>
	type $giper_web_bar_link__uri_giper_web_bar_14 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['uri'] >
	>
	type $giper_web_bar_link__icon_giper_web_bar_15 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['icon'] >
	>
	type $giper_web_bar_link__title_giper_web_bar_16 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['title'] >
	>
	type $giper_web_bar_link__uri_giper_web_bar_17 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['uri'] >
	>
	type $giper_web_bar_link__icon_giper_web_bar_18 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['icon'] >
	>
	type $giper_web_bar_link__title_giper_web_bar_19 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['title'] >
	>
	type $giper_web_bar_link__uri_giper_web_bar_20 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['uri'] >
	>
	type $giper_web_bar_link__icon_giper_web_bar_21 = $mol_type_enforce<
		string
		,
		ReturnType< $giper_web_bar_link['icon'] >
	>
	type $mol_link_source__uri_giper_web_bar_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	export class $giper_web_bar extends $mol_page {
		Theme( ): $mol_theme_auto
		title( ): string
		Giper( ): $giper_web_bar_link
		Search( ): $giper_web_bar_link
		Bot( ): $giper_web_bar_link
		Lingua( ): $giper_web_bar_link
		Player( ): $giper_web_bar_link
		Balls( ): $giper_web_bar_link
		IQ( ): $giper_web_bar_link
		apps( ): readonly(any)[]
		Sources( ): $mol_link_source
		plugins( ): readonly(any)[]
		head( ): readonly(any)[]
		body( ): ReturnType< $giper_web_bar['apps'] >
		foot( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=bar.view.tree.d.ts.map
export = $;
//# sourceMappingURL=web.d.ts.map

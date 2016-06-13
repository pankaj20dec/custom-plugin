import { createWidget } from 'discourse/widgets/widget';
import { iconNode } from 'discourse/helpers/fa-icon';
import { avatarImg } from 'discourse/widgets/post';
import DiscourseURL from 'discourse/lib/url';
import { wantsNewWindow } from 'discourse/lib/intercept-click';

import { h } from 'virtual-dom';

createWidget('custom-widget',{
	tagName: 'div.custom-icon',
	html(){
		return h('div.icon-content',h('span.custom-icon',"Click"));
	}

})
import{_ as t,o as n,c as s,d as a}from"./app-xrgnhFxe.js";const p={},o=a(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Form<span class="token punctuation">,</span> Input<span class="token punctuation">,</span> Select<span class="token punctuation">,</span> Row<span class="token punctuation">,</span> Col<span class="token punctuation">,</span> DatePicker<span class="token punctuation">,</span> message<span class="token punctuation">,</span> Spin<span class="token punctuation">,</span> Radio<span class="token punctuation">,</span> Checkbox<span class="token punctuation">,</span> Space <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;antd&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&quot;dayjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PlusOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@ant-design/icons&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> RangePickerProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;antd/es/date-picker&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TextArea <span class="token keyword">from</span> <span class="token string">&quot;antd/es/input/TextArea&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">Index</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

	<span class="token keyword">const</span> <span class="token punctuation">[</span>form<span class="token punctuation">]</span> <span class="token operator">=</span> Form<span class="token punctuation">.</span><span class="token function">useForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;addTenant card&quot;</span><span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span>Form
				form<span class="token operator">=</span><span class="token punctuation">{</span>form<span class="token punctuation">}</span>
				onValuesChange<span class="token operator">=</span><span class="token punctuation">{</span>onFormLayoutChange<span class="token punctuation">}</span>
				initialValues<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
					tenantPrincipals<span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							name<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
							phone<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
							position<span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">}</span>
				name<span class="token operator">=</span><span class="token string">&quot;dynamic_form_complex&quot;</span>
				labelCol<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
					span<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
					offset<span class="token operator">:</span> <span class="token number">1</span>
				<span class="token punctuation">}</span><span class="token punctuation">}</span>
				onFinish<span class="token operator">=</span><span class="token punctuation">{</span>onFinish<span class="token punctuation">}</span>
				autoComplete<span class="token operator">=</span><span class="token string">&quot;off&quot;</span>
			<span class="token operator">&gt;</span>
		
		


				<span class="token punctuation">{</span><span class="token comment">/* 单选题板块 */</span><span class="token punctuation">}</span>
				<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
					<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>List name<span class="token operator">=</span><span class="token string">&quot;singleArr&quot;</span><span class="token operator">&gt;</span>
						<span class="token punctuation">{</span><span class="token punctuation">(</span>fields<span class="token punctuation">,</span> <span class="token punctuation">{</span> add<span class="token punctuation">,</span> remove <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
							<span class="token operator">&lt;</span><span class="token operator">&gt;</span>
								<span class="token punctuation">{</span>fields<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>field<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
									<span class="token operator">&lt;</span>Row key<span class="token operator">=</span><span class="token punctuation">{</span>field<span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token operator">&gt;</span>
										<span class="token operator">&lt;</span>h6 className<span class="token operator">=</span><span class="token string">&quot;questionName&quot;</span><span class="token operator">&gt;</span>题号<span class="token punctuation">{</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h6<span class="token operator">&gt;</span>
										<span class="token operator">&lt;</span>Col span<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
											<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item
												<span class="token punctuation">{</span><span class="token operator">...</span>field<span class="token punctuation">}</span>
												rules<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&quot;请输入题干&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
												label<span class="token operator">=</span><span class="token string">&quot;题干：&quot;</span>
												name<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>field<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;stem&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
											<span class="token operator">&gt;</span>
												<span class="token operator">&lt;</span>Input<span class="token punctuation">.</span>TextArea placeholder<span class="token operator">=</span><span class="token string">&quot;请输入题干&quot;</span> maxLength<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span> showCount <span class="token operator">/</span><span class="token operator">&gt;</span>
											<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
										<span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">&gt;</span>
										<span class="token operator">&lt;</span>Col span<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
											<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>List name<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>field<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token string">&quot;options&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
												<span class="token punctuation">{</span><span class="token punctuation">(</span>fieldsInside<span class="token punctuation">,</span> <span class="token punctuation">{</span> add<span class="token operator">:</span> addInside<span class="token punctuation">,</span> remove<span class="token operator">:</span> removeInside <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
													<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
														<span class="token punctuation">{</span>fieldsInside<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token operator">...</span>restFieldInside <span class="token punctuation">}</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
															<span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>key<span class="token punctuation">}</span><span class="token operator">&gt;</span>
																<span class="token operator">&lt;</span>Row<span class="token operator">&gt;</span>
																	<span class="token operator">&lt;</span>Space<span class="token operator">&gt;</span>
																		<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;addExamPageQsTitle&quot;</span><span class="token operator">&gt;</span>选项 <span class="token punctuation">{</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>

																		<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item
																			<span class="token punctuation">{</span><span class="token operator">...</span>restFieldInside<span class="token punctuation">}</span>
																			name<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>name<span class="token punctuation">,</span> <span class="token string">&quot;isAnswer&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
																			label<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;选项是否正确&quot;</span><span class="token punctuation">}</span>
																			rules<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&quot;请选择选项是否正确&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
																		<span class="token operator">&gt;</span>
																			<span class="token operator">&lt;</span>Select className<span class="token operator">=</span><span class="token string">&quot;addExamPageSelect&quot;</span> placeholder<span class="token operator">=</span><span class="token string">&quot;请选择选项是否正确&quot;</span> value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
																				<span class="token operator">&lt;</span>Select<span class="token punctuation">.</span>Option value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>正确<span class="token operator">&lt;</span><span class="token operator">/</span>Select<span class="token punctuation">.</span>Option<span class="token operator">&gt;</span>
																				<span class="token operator">&lt;</span>Select<span class="token punctuation">.</span>Option value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>错误<span class="token operator">&lt;</span><span class="token operator">/</span>Select<span class="token punctuation">.</span>Option<span class="token operator">&gt;</span>
																			<span class="token operator">&lt;</span><span class="token operator">/</span>Select<span class="token operator">&gt;</span>
																		<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
																		<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item
																			<span class="token punctuation">{</span><span class="token operator">...</span>restFieldInside<span class="token punctuation">}</span>
																			name<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>name<span class="token punctuation">,</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
																			label<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;选项内容&quot;</span><span class="token punctuation">}</span>
																			rules<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token punctuation">{</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&quot;请输入文案&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
																		<span class="token operator">&gt;</span>
																			<span class="token operator">&lt;</span>Input placeholder<span class="token operator">=</span><span class="token string">&quot;请输入选项&quot;</span> maxLength<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
																		<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>

																		<span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token operator">!</span>form<span class="token punctuation">.</span><span class="token function">getFieldValue</span><span class="token punctuation">(</span><span class="token string">&quot;singleArr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span>field<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token operator">?.</span>options<span class="token operator">?.</span>length <span class="token operator">||</span>
																			form<span class="token punctuation">.</span><span class="token function">getFieldValue</span><span class="token punctuation">(</span><span class="token string">&quot;singleArr&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span>field<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token operator">?.</span>options<span class="token operator">?.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
																			<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
																				<span class="token operator">&lt;</span>Button
																					danger
																					size<span class="token operator">=</span><span class="token string">&quot;small&quot;</span>
																					className<span class="token operator">=</span><span class="token string">&quot;addExamPageQsDel&quot;</span>
																					onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">removeInside</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">}</span>
																				<span class="token operator">&gt;</span>
																					删除
																				<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
																			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
																		<span class="token punctuation">)</span><span class="token punctuation">}</span>
																	<span class="token operator">&lt;</span><span class="token operator">/</span>Space<span class="token operator">&gt;</span>
																<span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">&gt;</span>
															<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
														<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

														<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
															<span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">addInside</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>新增选项<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
														<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
													<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
												<span class="token punctuation">)</span><span class="token punctuation">}</span>
											<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>List<span class="token operator">&gt;</span>
										<span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">&gt;</span>
										
										<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
											<span class="token operator">&lt;</span>Button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">remove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span> danger<span class="token operator">&gt;</span>
												删除
											<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
										<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
									<span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">&gt;</span>
								<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
								<span class="token operator">&lt;</span>Row<span class="token operator">&gt;</span>
									<span class="token operator">&lt;</span>Col span<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
										<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
											<span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">&quot;dashed&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> block icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>PlusOutlined <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
												添加单选
											<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
										<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
									<span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">&gt;</span>
								<span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">&gt;</span>
							<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
						<span class="token punctuation">)</span><span class="token punctuation">}</span>
					<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>List<span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
			
			

				<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
					<span class="token operator">&lt;</span>Row<span class="token operator">&gt;</span>
						<span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;btn-box&quot;</span><span class="token operator">&gt;</span>
							<span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">&quot;primary&quot;</span> htmlType<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span><span class="token operator">&gt;</span>
								确认提交
							<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
							<span class="token operator">&lt;</span>Button className<span class="token operator">=</span><span class="token string">&quot;cancel-btn&quot;</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>goBack<span class="token punctuation">}</span><span class="token operator">&gt;</span>
								取消
							<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">&gt;</span>
						<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
					<span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">&gt;</span>
				<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Item<span class="token operator">&gt;</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">&gt;</span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Index<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),e=[o];function l(c,i){return n(),s("div",null,e)}const u=t(p,[["render",l],["__file","react 版本 antd多层嵌套表单.html.vue"]]);export{u as default};

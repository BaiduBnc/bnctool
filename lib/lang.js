var Lang = {
	CHS: {
		chooseTip : '创建新的工程喽，请选择想要创建的类型，不选择或者写入其他的则默认为单页面应用:',
		chooseOne : '    1.单页面应用 vue-router;',
		chooseTwo : '    2.bnc能力模板;',
		chooseThree : '    3.多页面应用;',
		chooseFour : '    4.简单页面;',
		name : '请输入您应用的名字：',
		nameError : '应用的名字必须为：',
		nameErrorOne : '    1.由字母和数字组成的',
		nameErrorTwo : '    2.以字母开头',
		nameErrorThree : '    3.长度大于2',
		createDir : '创建文件夹成功 -> ',
		download : '开始下载代码',
		waitTip : '请稍等片刻...',
		DownComplete : '下载完毕！',
		init : '开始初始化...',
		show : '您可以预览 ->',
		recommend : '使用“BNC打造“调试代码',
		helps : ['  实例:', 
				 '    # 创建官方模板的新项目',
				 '    1. bnc init project-Type project-name',
				 '        使用上面的整行可直接创建指定类型指定名称的应用', 
				 '', 
				 '        project-Type:应用类型，值对应的为 1：单页面应用，2：BNC能力模板',  
				 '        project-name:想要创建的项目的名称', 
				 '        如果无法识别应用类型，则直接创建类型为单页面应用的指定名称的应用',  
				 '        如果未应用名称，则自动创建为bncDemo的应用',  
				 '        eg: bnc ini 1 demo',
				 '',
				 '    2. bnc init',  
				 '        使用上面的操作可以一次填写项目类型和名称进行创建',  
				 '        应用类型的值对应的为 1.单页面应用，2：BNC能力模板'],
		typeError : '注意：你的项目类型输入错误，默认为单页面应用',
		goType : '注意：您输入了一个参数，已识别为项目类型，项目名称默认为 bncDemo',
		goName : '注意：您输入了一个参数，已识别为项目名称，项目类型默认为单页面应用'
	},
	EN: {
		chooseTip : 'select the type you want to create, do not choose or write to another, default to a single page application:',
		chooseOne : '1.Single page application: vue-router;',
		chooseTwo : '2.Multi page application',
		chooseThree : '3.Simple page;',
		name : 'Please enter the name of your application:',
		nameError : 'project name must be:',
		nameErrorOne : '    1. composed of letters and numbers',
		nameErrorTwo : '    2. start with letter',
		nameErrorThree : '    3. length > 2',
		createDir : 'create directory success -> ',
		download : 'Start downloading the code.',
		waitTip : 'Please wait for a minute ...',
		DownComplete : 'Download complete!',
		init : 'Start initialization...',
		show : 'You can preview in ->',
		recommend : 'Use "bnc build" to debug the code',
		helps : ['  Examples:',
				 '    # create a new project with an official template',
				 '    $ bnc init project-Type project-name',
				 '        Using the entire row above, you can directly create an application with the specified name of the specified type',
				 
				 '',
				 '        project-Type:Application type，The value corresponds to 1: Single page application,2:BNC capability template',
				 '        project-name:The name of the project you want to create',
				 "        If you can't identify application types, you create directly the application of the specified name of a single page application",
				 '        If the name is not applied, the application for bncDemo is automatically created',
				 '        eg: bnc ini 1 demo',

				 '',
				 '    2. bnc init',
				 '        Using the above operation, you can create a project type and name at once',
				 '        Application type values correspond to 1. single page applications, 2:BNC capability templates'],
		typeError : 'warn: your item type is entered wrong and defaults to a single page application',
		goType : 'warn: You entered a parameter that has been recognized as a project type, and the project name defaults to bncDemo',
		goName : 'warn: You entered a parameter that has been recognized as a project name, and the project type defaults to a single page application'
	}
}
module.exports = Lang;
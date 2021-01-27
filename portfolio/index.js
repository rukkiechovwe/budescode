let openBtn = document.getElementById('openBtn')
		let closeBtn = document.getElementById('closeBtn')
		closeBtn.style.display = 'none'
		let sideNav = document.getElementById('sideNav')
		openBtn.addEventListener('click',function(){
			sideNav.style.display = 'flex';
			sideNav.style.width = '100%'
			sideNav.style.height = '100vh';
			sideNav.style.overflow = 'hidden';
			sideNav.style.transform = 'translateY(0px)';
			closeBtn.style.display = 'block';
			openBtn.style.display = 'none';
		})
		closeBtn.addEventListener('click',function(){
			sideNav.style.transform = 'translateY(-1300px)';
			closeBtn.style.display = 'none';
			openBtn.style.display = 'block';
		})
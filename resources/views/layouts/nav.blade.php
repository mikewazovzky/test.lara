<nav class="navbar navbar-default navbar-static-top">
	<div class="container">
		<div class="navbar-header">

			<!-- Collapsed Hamburger -->
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
				<span class="sr-only">Toggle Navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>

			<!-- Branding Image -->
			<a class="navbar-brand" href="{{ url('/') }}">Lara</a>
		</div>

		<div class="collapse navbar-collapse" id="app-navbar-collapse">
			<!-- Left Side Of Navbar -->
			<ul class="nav navbar-nav">
				&nbsp;					
				<li><a href="#">About</a></li>
				<li><a href="#">Contacts</a></li>
				<!-- Flyers Project Navbar -->
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Flyers <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="/flyers">Index</a></li>
						<li><a href="/flyers/create">Create</a></li>
						<li role="separator" class="divider"></li>
						<li class="dropdown-header">About</li>
						<li><a href="#">About Project Flyers </a></li>
					</ul>
				<!-- Tasks Project Navbar -->
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tasks <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="/tasks">Index</a></li>
						<li role="separator" class="divider"></li>
						<li class="dropdown-header">About</li>
						<li><a href="#">About Project Tasks</a></li>
					</ul>						
				</li>	
				<!-- Test Area Navbar -->
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Test <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a href="/test">Tasks</a></li>
						<li><a href="/es6">ES6</a></li>
					</ul>						
				</li>					
				
			</ul>

			<!-- Right Side Of Navbar -->
			<ul class="nav navbar-nav navbar-right">
				<!-- Authentication Links -->
				@if (Auth::guest())
					<li><a href="{{ url('/login') }}">Login</a></li>
					<li><a href="{{ url('/register') }}">Register</a></li>
				@else
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
							{{ Auth::user()->name }} <span class="caret"></span>
						</a>

						<ul class="dropdown-menu" role="menu">
							<li>
								<a href="{{ url('/logout') }}"
									onclick="event.preventDefault();
											 document.getElementById('logout-form').submit();">
									Logout
								</a>

								<form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
									{{ csrf_field() }}
								</form>
							</li>
						</ul>
					</li>
					

				@endif
			</ul>
		</div>
	</div>
</nav>

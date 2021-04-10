package com.vini.app.resources;

import com.vini.app.model.JwtRequest;
import com.vini.app.model.JwtResponse;
import com.vini.app.model.LoginUserDetails;
import com.vini.app.model.User;
import com.vini.app.services.AuthService;
import com.vini.app.services.UserDetailsService;
import com.vini.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthResource {
	@Autowired
	AuthService authService;

	@Autowired
	UserDetailsService userDetailsService;

	@RequestMapping(method = RequestMethod.POST, path = "/auth/token")
	@CrossOrigin (origins = "http://localhost:3000")
	public ResponseEntity<JwtResponse> doTokenAuth (@RequestBody JwtRequest jwtRequest) throws Exception {
		authService.authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());

		UserDetails userDetails = authService.findUserDetails(jwtRequest.getUsername());
		String jwtToken = authService.generateToken (userDetails);
		long userId = ((LoginUserDetails)userDetails).getUserId();

		JwtResponse jwtResponse =  new JwtResponse(userId, jwtToken, userDetails.getUsername(), userDetails.getAuthorities());
		System.out.println( "JWT Response :: " + jwtResponse);
		return ResponseEntity.ok(jwtResponse);
	}
}

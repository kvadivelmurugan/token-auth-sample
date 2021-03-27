package com.vini.app.resources;

import com.vini.app.model.User;
import com.vini.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationResource {
	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.POST, path = "/auth/basic")
	@CrossOrigin (origins = "http://localhost:3000")
	public ResponseEntity<User> doBasicAuth (@RequestParam ("userName") String userName) {
		User user = userService.findByUserName(userName);
		return ResponseEntity.ok(user);
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/auth/token")
	public ResponseEntity<?> doTokenAuth (String username, String password) {
		return ResponseEntity.ok(null);
		
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/auth")
	public ResponseEntity<?> doAuth (String username, String password) {
		return ResponseEntity.ok(null);
		
	}
	
	@RequestMapping(method = RequestMethod.POST, path = "/oauth")
	public ResponseEntity<?> doOAuth (String username, String password) {
		return ResponseEntity.ok(null);
		
	}
}
